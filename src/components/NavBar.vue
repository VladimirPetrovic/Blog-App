<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="{name: 'home'}">Blog App</router-link>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" :to="{name: 'posts'}">Posts</router-link>
        </div>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>