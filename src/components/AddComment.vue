<template>
  <div>
    <form class="col-3 ml-3" @submit.prevent="addComment()">
      <div class="form-group">
        <label for="username">User name</label>
        <input type="text" minlength="2" required v-model="comment.username" class="form-control" id="username">
      </div>
      <div>
          <label for="text">Comment text</label>
          <textarea v-model="comment.text" id="text" maxlength="300" cols="100" rows="5"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mr-2">Submit</button>
      <button type="reset" class="btn btn-warning mr-2">Reset</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            comment: {
                username: '',
                text: ''
            }
        }
    },
    methods: {
        addComment() {
            this.$emit('commentSubmited', this.comment)
            this.comment = {}
        }
    }

}
</script>
