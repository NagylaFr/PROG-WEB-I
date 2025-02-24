var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userid', function (req, res, next) {
  const userid = req.params.userid;

  if (userid !== 'signin' && userid !== 'signup') {
    res.render('other', { title: userid , content: "Bem vindo " + userid});
    console.log('Usuário entrou em users/' + userid);
  } else {
    if (userid === 'signin') {
      res.render('other', { title: 'Sign In' , content: ""});
      console.log('Usuário entrou em users/signin')
    } else if (userid === 'signup') {
        res.render('other', { title: 'Sign Up' , content: "Coloque um nome junto com /users. Por exemplo <b>/users/José Roberto</b>"});
        res.send
        console.log('Usuário entrou em users/signup')
    }
  }
});

module.exports = router;
