import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
UserSchema.index({ username: 1, email: 1 })

const User = mongoose.model('User', UserSchema);
export default User;