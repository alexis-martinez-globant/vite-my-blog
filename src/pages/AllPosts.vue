<template>
  <h1>All Posts</h1>
  <div v-if="posts">
    <table border="1">
      <thead>
        <tr>
          <th>User id</th>
          <th>Post id</th>
          <th>Title</th>
          <th>Text</th>
          <!-- <th>Go to</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <!-- <router-link to="/blog/{{blog.id}}">► {{ blog.id }}</router-link> -->
            <!-- <router-link to="/blog/${{blog.id}}">► {{ blog.id }}</router-link> -->
            <!-- <router-link to="`/blog/${{blog.id}}`">► {{ blog.id }}</router-link> -->
            <router-link
              :to="{ name: 'Post', params: { id: post.id, postId: post.id } }"
            >
              ►
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: null,
      comments: null,
    };
  },

  created() {
    this.getAllPosts();
    // this.getComments();
  },

  methods: {
    async getAllPosts() {
      try {
        const posts = await fetch(
          `https://jsonplaceholder.typicode.com/posts/`
        ).then((r) => r.json());
        this.posts = posts;
        // console.log(blogs);
      } catch (error) {
        this.$router.push("/");
        console.log("no blogs here");
      }
    },
    // async getAllComments() {
    //   try {
    //     const comments = await fetch(
    //       `https://jsonplaceholder.typicode.com/comments`
    //     ).then((r) => r.json());
    //     this.comments = comments;
    //     console.log(comments);
    //   } catch (error) {
    //     console.log(comments);
    //     this.$router.push("/");
    //     console.log("no blogs here");
    //   }
    // },
  },
  watch: {
    id() {
      this.getAllPosts();
    },
    // postId() {
    //   this.getAllComments();
    // },
  },
};
</script>

<style scoped>
table {
  background: #666;
}
tbody {
  background: rgb(136, 134, 134);
}
th,
td {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: red;
}
th {
  font-weight: bold;
}

div:nth-child(3) > table {
  width: 80%;
  margin: 0 auto;
}
#app > div:nth-child(4) > table > tr:nth-child(1) > th:nth-child(2) {
  max-width: 20%;
}
div:nth-child(4) > table > tr:nth-child(4) > td:nth-child(2) {
  width: 10%;
}

#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(1),
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(2),
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(3),
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(4) {
  vertical-align: initial;
  padding-top: 5px;
}
</style>