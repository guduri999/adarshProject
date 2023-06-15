import mongoose from 'mongoose'

import userSchema from '../schema/user.schema.js'

const userModal = mongoose.model("Users", userSchema)

export default userModal;