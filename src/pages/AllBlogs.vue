<template>
  <h1>All Blogs</h1>
  <div v-if="blogs">
    <table border="1">
      <thead>
        <tr>
          <th>User id</th>
          <th>Blog id</th>
          <th>Title</th>
          <th>Body</th>
          <!-- <th>Go to</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in blogs" :key="blog.id">
          <td>{{ blog.userId }}</td>
          <td>{{ blog.id }}</td>
          <td>{{ blog.title }}</td>
          <td>{{ blog.body }}</td>
          <td>
            <!-- <router-link to="/blog/{{blog.id}}">► {{ blog.id }}</router-link> -->
            <!-- <router-link to="/blog/${{blog.id}}">► {{ blog.id }}</router-link> -->
            <!-- <router-link to="`/blog/${{blog.id}}`">► {{ blog.id }}</router-link> -->
            <router-link
              :to="{ name: 'Blog', params: { id: blog.id, postId: blog.id } }"
              >►</router-link
            >
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
      blogs: null,
      comments: null,
    };
  },

  created() {
    this.getAllBlogs();
    // this.getComments();
  },

  methods: {
    async getAllBlogs() {
      try {
        const blogs = await fetch(
          `https://jsonplaceholder.typicode.com/posts/`
        ).then((r) => r.json());
        this.blogs = blogs;
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
      this.getAllBlogs();
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