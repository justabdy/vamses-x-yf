const fs = require('fs')

function UTSave(object, session) {
	const DBDir = `./storage_cabinets/game/ulartangga/${session}.json`
	fs.writeFileSync(DBDir, JSON.stringify(obj, null, 2))
}

function setUT(session) {
  const DBDir = `./storage_cabinets/game/ulartangga/${session}.json`
	if (!fs.existsSync(DBDir)) {
		const object = { 
            player1: { 
              id: playersUT1,
              warna: playersUT1_warna,
              giliran: true,
              jalan: 0
            },
              player2: { 
              id: playersUT2,
              warna: playersUT2_warna,
              giliran: false,
              jalan: 0
            }
		geludSave(object, session)
		return object
	} else {
		const read = JSON.parse(fs.readFileSync(DBDir))
		return read
	}
}

module.exports = setGelud