<template>
  <div>
      <div class="card float-left ml-4 mt-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Title: {{ post.title}}</h5>
            <p class="card-text">Text: {{ post.text }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { postsService } from '../utils/PostsService'
export default {
    data() {
        return {
            post: {}
        }
    },
    created() {
        postsService.getPost(this.$route.params.id).then(response => {
            this.post = response.data
        }).catch(error => {
            console.error(error);
            
        })
    }
}
</script>
