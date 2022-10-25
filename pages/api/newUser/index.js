const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  const formData = req.body;
  try {
    const dbs = await client.query(
      q.Create(q.Collection('users'), {
        data: formData,
      })
    );
    res.status(200).json('hello');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// (ref) => q.Get(ref)
