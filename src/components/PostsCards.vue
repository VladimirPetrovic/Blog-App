<template>
  <div>
    <div class="card float-left mr-3" style="width: 18rem;" v-for="post in posts" :key="post.id">
        <div class="card-body">
            <h5 class="card-title">{{ post.title}}<span class="float-right">{{ post.comments.length }}</span></h5>
            <span>Created at: {{ post.createdAt | formatDate }}</span><br>
            <router-link :to="{name: 'view-post', params: { id: post.id }}">View</router-link>
            <router-link class="float-right" :to="{name: 'edit-post', params: { id: post.id }}">
                Edit
            </router-link>
            <a href="#" class="float-right link mr-2" @click="manageDelete(post.id)">Delete</a>
        </div>
    </div>
  </div>
</template>

<script>
import { postsService } from '../utils/PostsService'
import { mixins } from '../mixins'

export default {
    mixins: [mixins],
    props: ['posts'],
    methods: {
        manageDelete(id) {
            if (confirm('Are you sure you want to delete this post?')) {
                this.deletePost(id)
            }
        },
        deletePost(id) {
            postsService.deletePost(id).then(() => {
                let index = this.posts.findIndex(post => post.id ==id)
                this.posts.splice(index, 1)
            }).catch(error => {
                console.error(error);
            })
        }
    }
}
</script>
