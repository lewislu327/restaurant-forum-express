const db = require("../../models");
const Comment = db.Category;
const commentService = require("../../services/commentService");

let commentController = {
  postComment: (req, res) => {
    commentService.postComment(req, res, (data) => {
      return res.json(data);
    });
  },

  deleteComment: (req, res) => {
    commentService.deleteComment(req, res, (data) => {
      return res.json(data);
    });
  },
};

module.exports = commentController;
