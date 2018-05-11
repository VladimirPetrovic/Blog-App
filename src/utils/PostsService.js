import axios from 'axios'
export default class PostsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll() {
        return axios.get('posts?filter={"include":["comments"]}')
    }
    getPost(id) {
        return axios.get('posts/' + id +'?filter={"include":["comments"]}')
    }
    addPost(post) {
        return axios.post('posts', post)
    }
    editPost(post) {
        return axios.put('posts/' + post.id, post)
    }
    deletePost(id) {
        return axios.delete('posts/' + id)
    }
    addComment(comment, postId) {
        return axios.post('posts/' + postId + '/comments', comment)
    }
}

export const postsService = new PostsService()