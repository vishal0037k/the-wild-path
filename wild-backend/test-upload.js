const cloudinary = require("./utils/cloudinary");
const path = require("path");

const testUpload = async () => {
  try {
    const filePath = path.join(__dirname, "test.jpg"); // make sure you have a test.jpg
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
    });
    console.log("✅ Uploaded successfully:", result.secure_url);
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
};

testUpload();
