"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var indexRouter = _express["default"].Router();

indexRouter.post('/', function (req, res) {
  console.log(req.body);
  res.status(200).json("Successfully called the checkout endpoint");
});
var _default = indexRouter;
exports["default"] = _default;