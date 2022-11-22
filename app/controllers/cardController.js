const { response } = require('express');
const dataMapper = require('../dataMapper.js');

const cardController = {

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
module.exports = cardController;
