import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const SECRET = process.env.SECRET

const auth = async (req, res, next) => {
	console.log('hi')
	//if (req.path == '/') return next() // no autentication needed to access home page

	console.log('not home')
	next()
	/*
	try {
		const token = req.headers.authorization.split(" ")[1]

		const isCustomAuth = token.length < 500 

		let decodeData;

		//If token is custom token do this
		if(token && isCustomAuth) {
				decodeData = jwt.verify(token, SECRET)

				req.userId = decodeData?.id

		} else {
				//Else of token is google token then do this
				decodeData = jwt.decode(token)

				req.userId = decodeData?.sub
		}

		next()
	} catch (error) {
		console.log(error)
	}
	*/
}

export default auth