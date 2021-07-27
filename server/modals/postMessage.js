import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: String
},
{
     collection: 'movies'
})

const PostMessage = mongoose.model('movies', movieSchema)

export default PostMessage;

