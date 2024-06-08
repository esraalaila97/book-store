"use strict";
const { Router } = require('express');
const bookStore = require('../controllers/bool-store.ts');
const router = Router();
router.post('/create-auth', bookStore.createAuthor);
module.exports = router;
//# sourceMappingURL=book-store.routes.js.map