const path = require('path');
const express = require('express');
const router = express.Router();

const multer = require('multer');
const {nanoid} = require('nanoid');
const User = require('../models/User');
const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let links = config.uploadAvatarClientPath;
        if (req.body.role && req.body.role === 'admin') {
            links = config.uploadAvatarAdminPath
        }
        if (req.body.role && req.body.role === 'driver') {
            links = config.uploadAvatarDriverPath
        }
        cb(null, links);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

router.post('/', upload.single('avatar'), async (req, res) => {
    const userData = {
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        avatar: req.file.originalname
    };
    if (req.body.role) {
        userData.role = req.body.role;
    }

    const user = new User(userData);

    try {
        await user.generationToken();
        await user.save();
        res.send(user)
    }catch (e) {
        console.log(e)
    }

});


module.exports = router;