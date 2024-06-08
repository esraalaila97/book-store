

import { Author } from '../entities/author.model';
import { myDataSource } from 'app-data-source';



const createAuthor = async (req, res)=>{ 
  const authorName =  req.query.authorName
  await myDataSource.getRepository(Author).save({
    name: authorName
  })
  res.send("Author created successfully"); 
} 


module.exports = { 
  createAuthor, 
}
