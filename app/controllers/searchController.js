const { response } = require('express');
const dataMapper = require('../dataMapper.js');

const searchController = {
	searchPage: (req, res) => {
		res.render('search')
	},

	searchedElementpage: async (req, res) => {
		console.log(req.query);
		// try {
		const cards = await dataMapper.getCardByElement(req.query);
		if (cards) {
			res.redirect('/');
		}
	}
	// catch {

}
// }
// };

module.exports = searchController;