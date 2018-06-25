//var fs = requrie('fs')
var readline = require('readline')

function main () {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	rl.question('What template you want?', as => {
		console.log(`template ${as} is building...`);

		rl.close()
	})
}

module.exports = main
