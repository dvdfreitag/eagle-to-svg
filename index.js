'use strict'

var parser = require('./parser.js')

module.exports.schematic = function(schematic, board, callback) {
	parser.parseSchematic(schematic, function(err, data) {
		if (err) callback(err)

		setTimeout(callback(null, data), 50)
	})
}
