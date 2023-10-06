let express = require("express");
let router = express.Router();
let minifyJs = require("../../controllers/api/minify-js");

/**
 * @swagger
 *
 * paths:
 *   /minify-js:
 *     post:
 *       parameters:
 *         - in: body
 *           name: options
 *           description: Mã JavaScript cần tối ưu hóa.
 *           schema:
 *             type: object
 *             properties:
 *               string_code:
 *                 type: string
 *                 default:
 *                 example: console.log('Hello World')
 *               string_annotations:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_compress:
 *                 type: object
 *                 default: {}
 *                 example: {}
 *               string_expression:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_ie:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_keep_fargs:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_keep_fnames:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_mangle:
 *                 type: boolean
 *                 default: true
 *                 example: true
 *               string_module:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_nameCache:
 *                 type: string
 *                 default: null
 *                 example: null
 *               string_output:
 *                 type: string
 *                 default: null
 *                 example: null
 *               string_parse:
 *                 type: object
 *                 default: {}
 *                 example: {}
 *               string_sourceMap:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_toplevel:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_v8:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_warnings:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *               string_webkit:
 *                 type: boolean
 *                 default: false
 *                 example: false
 *       responses:
 *         200:
 *           description: Thành công
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Trạng thái
 *                 example: successfully
 *               message:
 *                 type: string
 *                 description: Thông báo
 *                 example: console.log('Hello World')
 *         422:
 *           description: Thất bại
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Trạng thái
 *                 example: failed
 *               message:
 *                 type: object
 *                 description: Thông báo
 *                 example:
 *                   {
 *                     "message": "Unexpected token: name «World», expected: punc «;»",
 *                     "filename": "0",
 *                     "line": 1,
 *                     "col": 16,
 *                     "pos": 16,
 *                   }
 */
router.post("/", minifyJs.show);

module.exports = router;
