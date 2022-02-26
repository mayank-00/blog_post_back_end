const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  blogID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, { timestamps: true })

const CommentModel = mongoose.model('blog', CommentSchema);

module.exports = CommentModel;