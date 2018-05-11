<template>
    <div class="container mt-4">
        <div class="row">
        <div class="col">
            <posts-cards :posts="posts" />
        </div>
        </div>
    </div>
</template>

<script>
import { postsService } from '../utils/PostsService'
import PostsCards from '../components/PostsCards'

export default {
    components: {
        PostsCards
    },
    data() {
        return {
            posts: []
        }
    },
    created() {
        postsService.getAll().then(response => {
            this.posts = response.data
        }).catch(error => {
            console.error(error)
        })
    }
}
</script>
