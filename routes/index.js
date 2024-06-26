var express = require('express');
var router = express.Router();
const passport = require('passport');

// This app has no "home" page, but your projects should 😀
router.get('/', function(req, res, next) {
  res.redirect('/movies');
});

router.get('/auth/google', passport.authenticate(
    'google',
    {
        scope: ['profile', 'email'],
        //optional
        prompt: 'select_account',
    }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/movies',
        failureRedirect: '/movies',
    }
));

router.get('/logout', function(req, res){
    req.logout(function() {
        res.redirect('/movies');
    });
});

module.exports = router;
