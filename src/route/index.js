// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const community = require('./community')
const myblog = require('./myblog')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/community', community)
router.use('/myblog', myblog)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
