const jwt = require('jsonwebtoken');
const db = require('../../db');

// контроллер авторизации пользователя
module.exports = async (req, res) => {
  const params = req.body;

  if (!params) return res.json({ error: 'Params not found' });

  if (!params.login || !params.password) return res.json({ error: 'Password or login not found' });

  const query = `
    select * from auth_user('${params.login}', '${params.password}')
  `;

  try {
    const { rows } = await db.query(query);

    if (!rows) {
      return res.json({ result: null });
    }

  } catch (error) {
    console.error(error);
    return res.json({ error: error.message });
  }
};
