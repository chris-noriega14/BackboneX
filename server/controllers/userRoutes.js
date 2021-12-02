const router = require('express').Router();
const Users = require('../models/Users')

router.post('/login', async (req, res) => {
  try {

    const UsersData = await Users.findOne({ where: { email: req.body.email } });
    let error_type = {};
    if (!UsersData) {
      console.log("email doesnt exsist");
      error_type = { error: "Your password or email is not correct." }
      // return res.render("homepage", { error: "Your password or email is not correct." });
    }
    const validatePassword = await UsersData.checkPassword(req.body.password);

    if (!validatePassword) {
      console.log("password wrong");
      error_type = { error: "Your password or email is not correct." }
    }

    console.log("you were logged in");

    req.session.save(() => {
      console.log("you were logged in");
      req.session.user_id = usersData.id
      req.session.email = usersData.email;
      req.session.logged_in = true;

      
    });


  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/register', async (req, res) => {
  const { first_name, last_name, email, password, password2 } = req.body
  try {
    let errors = [];
    if (!first_name || !last_name || !email || !password || !password2) {
      errors.push({ message: 'you for got to fill in one of the fields.' });
    }

    if (password !== password2) {
      errors.push({ msg: 'Make sure the passwords match' });
    }

    if (password.length < 8) {
      errors.push({ msg: 'password should be a minimum of 8 characters' });
    }

    if (errors.length > 0) {
      console.log(errors)
      res.json(errors)

    } else {

      regData = await Users.findOne({ where: { email: email } })

      if (regData) {
        errors.push({ msg: "That email had already been registered, please login!" })
        res.json(errors)
      } else {

        

        const newUsers = await Users.create({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password
        });

        req.session.save(() => {
          req.session.user_id = newUsers.id
          req.session.email = newUsers.email;
          req.session.logged_in = true;

          res.render('dashboard', {
            loggedIn: req.session.logged_in,
            errors
          });
        });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// logout request.
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    res.redirect('/');
  } else {
    res.status(404).end();
  }
});



module.exports = router;
