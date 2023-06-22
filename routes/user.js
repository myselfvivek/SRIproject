// const express = require('express');
// const router = express.Router();

// // importing controllers
// const {logIn, signUp} = require("../controllers/Auth");
// const {auth, isStudent, isAdmin} = require("../middleware/auth");

// // connecting route with controller

// router.post('/signup', signUp);
// router.post('/login', logIn);

// router.get('/test', auth, (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Welcome to the protected route of the TESTS.",
//     });
// })


// router.get('/student', auth, isStudent, (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Welcome to the protected route of the student.",
//     });
// })

// router.get('/admin', auth, isAdmin, (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Welcome to the protected route of the admin.",
//     });
// })

// module.exports = router;