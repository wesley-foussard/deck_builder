const { response } = require('express');
const dataMapper = require('../dataMapper.js');

const searchController = {
	searchPage: function (req, res) {
		res.render('search')
	},

	searchElementpage: async function (req, res) {
		const elem = req.query;
		try {
			const cards = await dataMapper.getCardsByElement(elem);
			const title = 'Liste des cartes ' + (elem === 'null' ? ' sans élément' : `d'élement ${elem}`);
			if (cards) {
				res.render('cardList', { cards, title });
			}
		}
		catch (err) {
			console.log(err)
		}
	}
};

module.exports = searchController;