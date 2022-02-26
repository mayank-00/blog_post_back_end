const express = require('express');
const passport = require('passport');

const BlogModel = require("../models/blogs")

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await BlogModel.find().lean()
    return res.json({
      error: null,
      data
    });

  } catch (error) {
    return res.json({
      error: {
        message: "something went wrong",
        code: 500,
      },
      data: null
    })
  }
})

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {

    console.log("req.user --- ", req.user)
    const data = await BlogModel.create({
      authorID: req.authorID,
      slug: req.slug,
      teaserText: req.slug,
      teaserImage: req.path,
      title: req.title,
      metaTitle: req.metaTitle,
      metaDescription: req.metaDescription,
      keywords: req.keywords,
      status: req.status,
      contentType: req.contentType,
      content: req.content
    })
    return res.json({
      error: null,
      data
    });
  } catch (err) {
    return res.json({
      error: {
        message: "something went wrong",
        code: 500,
      },
      data: null
    })
  }
})

// router.patch('/:_id', passport.authenticate('jwt', { session: false }), async(req, res) => {
//   try {
//     const 
//   } catch (error) {

//   }
// })

module.exports = router;