module.exports = async (req, res) => {
  if (req.session && req.sessionID) {
    await req.session.regenerate((e) => {
      console.log('Session regenerate');
    });
  }

  return res.send(true);
};
