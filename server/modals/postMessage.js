import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: String,
    year: String,
    genres: [String],
    LikeCount: {
        type: Number,
        default: 0
    }

})

const PostMessage = mongoose.model('PostMessage', movieSchema)
 
export default PostMessage;