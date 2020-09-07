const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  chapter: String,
  pages: {},
});

module.exports = chapterModule = mongoose.model(
  "chapterModule",
  chapterSchema,
  "Chapters"
);
