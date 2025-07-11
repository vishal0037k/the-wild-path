const express = require("express");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const Trip = require("../models/Trip");

// storage
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 * 1024 }, // 1GB
});

// helper for cloudinary stream
const streamUpload = (fileBuffer, resourceType) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    stream.end(fileBuffer);
  });
};

// ✅ GET all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find().sort({ date: -1 });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

// ✅ GET single trip by ID
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.json(trip);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch trip" });
  }
});

// DELETE /api/trips/:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Trip.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Trip not found" });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete trip" });
  }
});


// ✅ POST create trip
router.post(
  "/",
  upload.fields([
    { name: "photos", maxCount: 500 },
    { name: "videos", maxCount: 500 },
  ]),
  async (req, res) => {
    try {
      const { title, date, from, to, people, description } = req.body;

      const uploadedPhotos = [];
      const uploadedVideos = [];

      // check combined file count
      const totalFiles =
        (req.files["photos"] ? req.files["photos"].length : 0) +
        (req.files["videos"] ? req.files["videos"].length : 0);

      if (totalFiles > 500) {
        return res
          .status(400)
          .json({ message: "You cannot upload more than 500 files total." });
      }

      if (req.files["photos"]) {
        for (const file of req.files["photos"]) {
          const url = await streamUpload(file.buffer, "image");
          uploadedPhotos.push(url);
        }
      }

      if (req.files["videos"]) {
        for (const file of req.files["videos"]) {
          const url = await streamUpload(file.buffer, "video");
          uploadedVideos.push(url);
        }
      }

      const newTrip = new Trip({
        title,
        date,
        from,
        to,
        people,
        description,
        photos: uploadedPhotos,
        videos: uploadedVideos,
      });

      await newTrip.save();
      res.status(201).json({ success: true, trip: newTrip });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Failed to create trip" });
    }
  }
);

// ✅ PUT update trip
router.put(
  "/:id",
  upload.fields([
    { name: "photos", maxCount: 500 },
    { name: "videos", maxCount: 500 },
  ]),
  async (req, res) => {
    try {
      const { title, date, from, to, people, description } = req.body;

      const trip = await Trip.findById(req.params.id);
      if (!trip) return res.status(404).json({ message: "Trip not found" });

      // check combined
      const totalFiles =
        (req.files["photos"] ? req.files["photos"].length : 0) +
        (req.files["videos"] ? req.files["videos"].length : 0);

      if (totalFiles > 500) {
        return res
          .status(400)
          .json({ message: "You cannot upload more than 500 files total." });
      }

      // update fields
      trip.title = title || trip.title;
      trip.date = date || trip.date;
      trip.from = from || trip.from;
      trip.to = to || trip.to;
      trip.people = people || trip.people;
      trip.description = description || trip.description;

      if (req.files["photos"]) {
        const uploadedPhotos = [];
        for (const file of req.files["photos"]) {
          const url = await streamUpload(file.buffer, "image");
          uploadedPhotos.push(url);
        }
        trip.photos = uploadedPhotos; // replace
      }

      if (req.files["videos"]) {
        const uploadedVideos = [];
        for (const file of req.files["videos"]) {
          const url = await streamUpload(file.buffer, "video");
          uploadedVideos.push(url);
        }
        trip.videos = uploadedVideos; // replace
      }

      await trip.save();
      res.json({ success: true, trip });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Failed to update trip" });
    }
  }
);

module.exports = router;
