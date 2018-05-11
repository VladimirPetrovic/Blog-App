<template>
  <div>
    <form class="col-6 mt-2" @submit.prevent="managePost()">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" minlength="2" required v-model="post.title" class="form-control" id="title">
      </div>
      <div>
          <label for="text">Title</label>
          <textarea v-model="post.text" id="text" maxlength="300" cols="100" rows="5"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mr-2">Submit</button>
      <button type="reset" class="btn btn-warning mr-2">Reset</button>
      <router-link :to="{name: 'posts'}" class="btn btn-secondary">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import { postsService } from '../utils/PostsService'
export default {
    data() {
        return {
            post: {
                title: '',
                text: ''
            }
        }
    },
    created() {
        if (this.$route.params.id) {
            postsService.getPost(this.$route.params.id).then(response => {
                this.post = response.data
            })
        }
    },
    methods: {
        managePost() {
            if (this.post.id) {
                this.editPost()
            } else {
                this.createPost()
            }
        },
        createPost() {
            postsService.addPost(this.post).then(() => {
                this.$router.push({name: 'posts'})
            }).catch(error => {
                console.error(error);
                
            })
        },
        editPost() {
            postsService.editPost(this.post).then(() => {
                this.$router.push({name: 'posts'})
            }).catch(error => {
                console.error(error);
                
            })
        }
    }
}
</script>
