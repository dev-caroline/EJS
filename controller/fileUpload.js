require('dotenv').config()
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const fileUpload = async (req, res) => {
    const url =   'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg'
    try{
        const uploadResult = await cloudinary.uploader
            .upload(url , {public_id: 'shoes'})
            .catch((error) => {
                // console.log(error);
                res.status(401).json({message: 'File is not uploaded', error})
            });
        console.log(uploadResult);
    
        if(uploadResult){
            res.status(201).json({message: 'File Upload successfully', url})
        }
    }
    catch(err){
        res.status(401).json({message: 'File is not uploaded', err})
    }
    }



module.exports = fileUpload