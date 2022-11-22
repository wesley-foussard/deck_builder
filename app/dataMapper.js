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
	async getCardByElement(elem) {
		if (elem !== null) {
			const query = "SELECT * FROM card WHERE element=$1;"
			try {
				const response = await client.query(query, [elem])
				if (response.rowCount == 1) {
					result = response.rows[0]
				}
			}
			catch (err) {
				console.error(err)
			}
		}

		else {
			const query = "SELECT * FROM card WHERE element IS NULL;"
			try {
				const response = await client.query(query)
				if (response.rowCount == 1) {
					result = response.rows[0]
				}
			}
			catch (err) {
				console.error(err)
			}

		}
		return result;
	}
}

module.exports = dataMapper;
