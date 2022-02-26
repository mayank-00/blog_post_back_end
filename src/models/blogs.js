const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  authorID: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  teaserText: String,
  teaserImage: String,
  title: String,
  metaTitle: String,
  metaDescription: String,
  keywords: [String],
  status: {
    type: String,
    enum: ["drafted", "published", "archived"],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    enum: ['slate']
  }
}, { timestamps: true });

const BlogModel = mongoose.model('blog', BlogSchema);

module.exports = BlogModel;