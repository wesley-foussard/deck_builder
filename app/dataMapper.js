const client = require('./database');
const database = require('./database');

const dataMapper = {
	async getAllCards() {
		const query = "SELECT * FROM card";
		const result = await database.query(query);
		return result.rows;
	},
	async getCardbyId(id) {
		const query = "SELECT * FROM card WHERE ID = $1;"
		try {
			const response = await client.query(query, [id])
			if (response.rowCount == 1) {
				result = response.rows[0]
			}
		}
		catch (err) {
			console.error(err)
		}
		return result;
	},
	getCardsByElement: async function (element) {
		let query;
		let result;
		//le piège : si l'élément n'est pas renseigné en BDD, il vaut NULL. Pour effectuer la requête, on utilise les mots-clé IS NULL
		if (element === 'null') {
			query = `SELECT * FROM "card" WHERE "element" IS NULL`;
			result = await database.query(query);
		}

		else {

			//sinon on fait la requête de façon classique
			text = `SELECT * FROM "card" WHERE "element"=$1`;
			values = [element];
			result = await database.query(text, values)

		}

		// const results = await database.query(query);
		return result.rows;
	},


}



module.exports = dataMapper;
