<template>
  <div>
    <div class="card float-left mr-3" style="width: 18rem;" v-for="post in posts" :key="post.id">
        <div class="card-body">
            <h5 class="card-title">{{ post.title}}</h5>
            <router-link :to="{name: 'view-post', params: { id: post.id }}">View</router-link>
            <router-link class="float-right" :to="{name: 'edit-post', params: { id: post.id }}">
                Edit
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['posts']
}
</script>
