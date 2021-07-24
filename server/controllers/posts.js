import PostMessage from '../modals/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await sample_mflix.find();
        
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
}

export const createPost = (req, res) => {
    res.send('POST CREATION');
}