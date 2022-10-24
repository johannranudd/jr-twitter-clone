const faunadb = require('faunadb');
// import faunadb from 'faunadb';

const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  try {
  } catch (error) {
    // res.status(500).json({ error: error.message });
  }
};
