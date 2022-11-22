const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  cardPage: async (req, res) => {
    try {
      const card = await dataMapper.getCardbyId(req.params.id);

      if (card) {
        res.render("carte", { card });
      };

    }
    catch (err) {
      console.log(err)
    }
  }
};

module.exports = mainController;
