const axios = require('axios');
const db = require('../database/dbconfig');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret  = require('../_secrets/keys')

const { authenticate } = require('./middlewares');


module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function generateToken(user) {
  const payload = {
    username: user.username
  }

  const options = {
    expiresIn: '5h',
    jwtid: '9123901'
  }

  return jwt.sign(payload, secret.jwtKey, options);
}

function register(req, res) {
  // implement user registration
  const user = req.body
  console.log(user)
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  console.log(hash);

  db('users').insert(user).then(id => {
    db('users').where({id: id[0]}).first().then(user => {
      const token = generateToken(user);
      res.status(201).json(token)
      console.log(token)
    }).catch(err => {
      res.status(500).json(err)
  })
  })
}

function login(req, res) {
  // implement user login
  const authentication = req.body
  console.log(authentication)

  db('users').where({username: authentication.username}).first().then(user => {
    console.log(user)
    if(user && bcrypt.compareSync(authentication.password, user.password)) {
      const token = generateToken(user);
      res.status(200).json(token)
    } else {
      return res.status(401).json({error: 'Invalid credentials'});
    }
  }).catch(err => {
    res.status(500).json(err);
  })
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
