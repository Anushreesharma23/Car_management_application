import express from 'express'

//router object
const DocsRouter = express.Router();

// Register User || POST Method
DocsRouter.get("/user-docs", (req, res)=>{
    res.redirect("https://solar-meadow-261302.postman.co/workspace/f5169a04-6352-4ae0-8357-5519c469bece/documentation/26332750-bcee267c-ad30-4980-af7a-2f2c2d53b71c")
});

//LOGIN || POST
DocsRouter.get("/product-docs", (req, res)=>{
    res.redirect("https://solar-meadow-261302.postman.co/workspace/f5169a04-6352-4ae0-8357-5519c469bece/documentation/26332750-4d653ce0-80df-4aa3-b728-84b9d4a8c348")
});

export default DocsRouter;