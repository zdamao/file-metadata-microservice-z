const router = require("express").Router();
const multer = require("multer");
const upload = multer({dest: "uploads/"});

router.route("/api/fileanalyse").post(upload.single("upfile"), (req, res)=> {
  try {
    const { originalname, size, mimetype } = req.file;
    res.json({
      originalname,
      size,
      mimetype
    })
  } catch(err) {
    res.status(404).json("error: " + err);
  }
});

module.exports = router;