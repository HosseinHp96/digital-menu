import multer from "multer";
import { AppError } from "../utils";

export const imgExtension = {
  "image/jpeg": ".jpeg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
};

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (imgExtension.hasOwnProperty(file.mimetype)) {
      cb(null, "tmp/images");
    } else if (file.mimetype === "video/mp4") {
      cb(null, "tmp/videos");
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        imgExtension[file.mimetype as keyof typeof imgExtension] || ".mp4"
    );
  },
});

export const uploadImages = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
        
    if (imgExtension.hasOwnProperty(file.mimetype)) cb(null, true);
    else {
      cb(
        new AppError({
          message: "file format is not valid",
          statusCode: 400,
        })
      );
    }
  },
});

export const uploadVideos = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    if (file.mimetype === "video/mp4") cb(null, true);
    else {
      cb(
        new AppError({
          message: "file format is not valid",
          statusCode: 400,
        })
      );
    }
  },
});
