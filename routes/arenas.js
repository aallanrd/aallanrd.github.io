var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Arena = require('../models/Arena.js');
var VerifyToken = require('../auth/VerifyToken');

/* GET ALL ARENAS */
router.get('/arenas', VerifyToken, function(req, res, next) {
	Arena.find(function (err, products) {
    if (err) return res.status(400).send("Something went wrong."); 
		res.json(products);
	});
});

/* GET SINGLE ARENA BY ID */
router.get('/arenas/:id', VerifyToken, function(req, res, next) {
  Arena.findById(req.params.id, function (err, post) {
	if(!post) return res.status(404).send("No Arena found. ID may be invalid."); 
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
    res.json(post);
  });
});

/* SAVE ARENA */
router.post('/arenas', VerifyToken, function(req, res, next) {
  Arena.create(req.body, function (err, post) {
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
	res.status(201).send(post);
  });
});

/* UPDATE ARENA */
router.put('/arenas/:id', VerifyToken, function(req, res, next) {
  Arena.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	if(!post) return res.status(404).send("No Arena found. ID may be invalid."); 
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
    res.json(post);
  });
});

/* DELETE ARENA */
router.delete('/arenas/:id', VerifyToken, function(req, res, next) {
  Arena.findByIdAndRemove(req.params.id, req.body, function (err, post) {
	if(!post) return res.status(404).send("No Arena found. ID may be invalid."); 
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid."); 
    res.json(post);
  });
});

module.exports = router;