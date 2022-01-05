import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const SECRET = process.env.SECRET

export const signup = async (req, res) => {
	const {firstName, lastName, email, password, confirmPassword} = req.body // From formData
	try {

		const existingUser = await User.findOne({ email })

		if (existingUser) return res.status(400).json({ message: "User already Exists"})

		if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match" })
		
		const hashedPassword = await bcrypt.hash(password, 12)

		const reslt = User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})

		const token = jwt.sign({ email: result.email, id: result._id }, SECRET, {expiresIn: "1h"})

		res.status(200).json({ result, token })
	} catch (error) {
		res.status(500).json({ message: "something went wrong" })
	}

}