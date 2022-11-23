const { response } = require('express');
const dataMapper = require('../dataMapper.js');

const searchController = {
	searchPage: function (req, res) {
		res.render('search')
	},

	searchElementpage: async function (req, res) {
		const elem = req.query.element;
		try {
			console.log('dans le try')
			const cards = await dataMapper.getCardsByElement(elem);
			console.log('résultat de la query : ' + cards)
			const title = 'Liste des cartes ' + (elem === 'null' ? ' sans élément' : `d'élement ${elem}`);
			console.log('titre: ' + title)
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