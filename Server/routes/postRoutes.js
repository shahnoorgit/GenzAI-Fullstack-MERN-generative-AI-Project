import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import PostSchema from "../MongoDB/Models/model.js";

dotenv.config();
const router = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// GET ALL POSTS
router.route("/").get(async (req, res) => {
  try {
    const posts = await PostSchema.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

// CREATE THE POST
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, picture } = req.body;

    const photoUrl = await cloudinary.uploader.upload(picture);

    const newPost = await PostSchema.create({
      name,
      prompt,
      picture: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});
export default router;
