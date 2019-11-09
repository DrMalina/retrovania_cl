const User = require('../models/user');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/', async (req, res) => {
    try {
    // Validation could be added here:
    /* 
    const {errpr} = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    */

    // Check if the user already exists
    let user = await User.findOne({ email: req.body.email });
    // db.collection.findOne(query, projection) - Returns one document that satisfies the specified query criteria on the collection or view.
    // parameter: query, type: document, description: Optional. Specifies query selection criteria using query operators.
    // parameter: projection, type: document, description: Optional. Specifies the fields to return using projection operators. Omit this parameter to return all fields in the matching document.
    if (user) {
        return res.status(400).send('Such user already exists!');
    } else {
        // inser new user if the don't exist yet
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        try {
            await user.insertOne(); // mongoDB method - Inserts a document into a collection - same as save() deprecated
        } catch(error) {
            console.log(error);
        }
        res.send(user);
    }
} catch (error) {
    console.log(error);
}

});

module.exports = router;