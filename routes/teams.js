var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Team = require('../models/Team.js');
var VerifyToken = require('../auth/VerifyToken');

/* GET ALL TEAMS */
router.get('/teams', VerifyToken, function(req, res, next) {
  Team.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE TEAM BY ID */
router.get('/teams/:id', VerifyToken, function(req, res, next) {
  Team.findById(req.params.id, function (err, post) {
	if(!post) return res.status(404).send("No Team found. ID may be invalid."); 
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
    res.json(post);
  });
});

/* SAVE TEAM */
router.post('/teams', VerifyToken, function(req, res, next) {
  Team.create(req.body, function (err, post) {
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
    res.json(post);
  });
});

/* UPDATE TEAM */
router.put('/teams/:id', VerifyToken, function(req, res, next) {
  Team.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	if(!post) return res.status(404).send("No Team found. ID may be invalid."); 
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
    res.json(post);
  });
});

/* DELETE TEAM */
router.delete('/teams/:id', VerifyToken, function(req, res, next) {
  Team.findByIdAndRemove(req.params.id, req.body, function (err, post) {
	if(!post) return res.status(404).send("No Team found. ID may be invalid."); 
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
    res.json(post);
  });
});

module.exports = router;