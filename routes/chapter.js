const mongoose = require("mongoose");
const router = require("express").Router();
const Chapter = require("../modules/ChapterModule");

router.get("/:chapter", async (req, res) => {
  const chapter = await Chapter.findOne({ chapter: req.params.chapter });

  res.json(chapter);
});

router.get("/:chapter/page/:page", async (req, res) => {
  const chapter = await Chapter.findOne({ chapter: req.params.chapter });
  const page_number = req.params.page;

  const page = await chapter.pages[page_number];

  res.json({ page: page });
});

module.exports = router;
