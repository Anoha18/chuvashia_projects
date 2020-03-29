const jwt = require('jsonwebtoken');
const db = require('../../db');

module.exports = async(req, res) => {
  const params = req.body;

  if (!params) {
    return res.json({ erorr: 'Params not found' });
  }

  if (!params.login && !params.password) {
    return res.json({ erorr: 'Login or password not found' });
  }

  const query = `
    select * from auth_user('${params.login}', '${params.password}')
  `;

  console.log('query: ', query);

  try {
    const { rows } = await db.query(query);

    console.log('rows: ', rows);

    const user = (rows[0] && rows[0].auth_user) || null;

    if (!user) {
      return res.json({ result: null });
    }

    req.session.user = user;

    return res.json({ result: user });
  } catch (error) {
    console.error(error);

    return res.json({ erorr: error.message });
  }
};
