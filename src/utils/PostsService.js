import axios from 'axios'
export default class PostsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll() {
        return axios.get('posts')
    }
    getPost(id) {
        return axios.get('posts/' + id)
    }
    addPost(post) {
        return axios.post('posts', post)
    }
    editPost(post) {
        return axios.put('posts/' + post.id, post)
    }
}

export const postsService = new PostsService()