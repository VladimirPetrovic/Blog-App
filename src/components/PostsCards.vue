<template>
  <div>
    <div class="card float-left mr-3" style="width: 18rem;" v-for="post in posts" :key="post.id">
        <div class="card-body">
            <h5 class="card-title">{{ post.title}}</h5>
            <p class="card-text">{{ post.text }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['posts']
}
</script>
