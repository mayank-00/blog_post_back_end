const multer = require('multer')




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname)
  }
})

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

const fileUpload = async (req, res) => {
  const upload = multer({
    storage: storage,
    fileFilter: imageFilter
  }).fields([
    { name: "teaserImage", maxCount: 1 }
  ])

  upload(req, res, async (err) => {

  })
}