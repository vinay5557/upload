var express = require('express')
var router = express.Router()
var multer = require('multer')

var upload = multer({ dest: process.env.UPLOADS || 'uploads/' })

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/file', upload.single('test'), function (req, res, next) {
  console.log('originalname: ' + req.file.originalname)
  console.log('encoding:     ' + req.file.encoding)
  console.log('mimetype:     ' + req.file.mimetype)
  console.log('size:         ' + req.file.size)
  console.log('filename:     ' + req.file.filename)
  console.log('path:         ' + req.file.path)

  res.redirect('/')
})

module.exports = router
