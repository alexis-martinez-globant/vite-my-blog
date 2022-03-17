<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Login">Login</router-link></li>
      <li>
        <!-- <router-link :to="{ name: 'Blog', params: { id: 1, postId: 1 } }" >Blog</router-link > -->
        <router-link :to="{ name: 'NewPost' }">New Post</router-link>
      </li>
      <li><router-link to="/AllPosts">All Posts</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #000;
}
/* a:active {
    text-decoration: wavy;
    color: red;
} */
.router-link-active {
  text-decoration: dashed;
  color: red;
}
ul,
li {
  display: inline;
  padding: 10px;
}
</style>