"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _blog_posts = _interopRequireDefault(require("../fixtures/blog_posts"));

var indexRouter = _express["default"].Router();

indexRouter.get('/', function (req, res) {
  return res.status(200).json(_blog_posts["default"]);
});
indexRouter.get('/:id', function (req, res) {
  var blogPostId = req.params.id;

  var blogPost = _blog_posts["default"].find(function (blogPost) {
    return blogPost.id === Number(blogPostId);
  });

  res.status(200).json(blogPost);
});
var _default = indexRouter;
exports["default"] = _default;