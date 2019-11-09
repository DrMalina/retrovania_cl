const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {

    // REQUEST VALIDATION
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }


    // CHECK IF THE USER ALREADY EXISTS
    let user = await User.findOne({ email: req.body.email });
    // db.collection.findOne(query, projection) - Returns one document that satisfies the specified query criteria on the collection or view.
    // parameter: query, type: document, description: Optional. Specifies query selection criteria using query operators.
    // parameter: projection, type: document, description: Optional. Specifies the fields to return using projection operators. Omit this parameter to return all fields in the matching document.
    if (user) {
        return res.status(400).send('Such user already exists!');
    } else {
        // inser new user if the don't exist yet
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        // recommended to be used as async functions
        const salt = await bcrypt.genSalt(10); // In cryptography, a salt is random data that is used as an additional input to a one-way function that "hashes" data, a password or passphrase. Salts are used to safeguard passwords in storage. E.g. Salt value: E1F53135E559C253, 	String to be hashed: password123E1F53135E559C253. Hashed value (salt value + password)
        user.password = await bcrypt.hash(user.password, salt);

        try {
            await user.save(); // mongoose method - saves a document into a collection
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