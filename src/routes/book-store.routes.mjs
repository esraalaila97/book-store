const { Router } = require('express'); 
  

const bookStore = require('../controllers/book-store.ts'); 
  
// Initialization 
const router = Router(); 
  
// Requests  
router.post('/create-auth', bookStore.createAuthor); 
  
module.exports = router;