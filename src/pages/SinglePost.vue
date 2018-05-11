<template>
  <div>
    <div class="card float-left ml-4 mt-2 mb-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Title: {{ post.title}}</h5>
            <p class="card-text">Text: {{ post.text }}</p>
        </div>
    </div>
    <div>
        <p></p>
        <add-comment @commentSubmited="submitComment"/>
    </div>
    <div>
        <ul class="list-group col-10 ml-4 mt-3" v-for="comment in comments" :key="comment.id">
            <li class="list-group-item active">{{ comment.username }} <span class="float-right">{{ comment.createdAt | diffForHumans }}</span></li>
            <textarea v-model="comment.text" class="list-group-item"></textarea>
        </ul>
    </div>
  </div>
</template>

<script>
import { postsService } from '../utils/PostsService'
import AddComment from '../components/AddComment.vue'
import { mixins } from '../mixins'

export default {
    mixins: [mixins],
    components: {
        AddComment
    },
    data() {
        return {
            post: {},
            comments: []
        }
    },
    created() {
        postsService.getPost(this.$route.params.id).then(response => {
            this.post = response.data
            this.comments = this.post.comments
        }).catch(error => {
            console.error(error);
            
        })
    },
    methods: {
        submitComment(comment) {
            postsService.addComment(comment, this.post.id).then(response => {
                this.comments.unshift(response.data)
            }).catch(error => {
                console.error(error)
            })
        }
    }
}
</script>
