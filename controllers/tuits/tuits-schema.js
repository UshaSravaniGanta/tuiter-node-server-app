import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   dislikes: Number,
                                   liked: Boolean,
                                   image: String,
                                   topic: String,
                                   userName: String,
                                   time: String,
                               }, {collection: 'tuits'});
export default schema;

