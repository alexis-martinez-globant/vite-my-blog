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
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td class="bg-green">
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
import { HTTP } from "../services/http-common";

export default {
  data() {
    return {
      posts: [],
      comments: [],
    };
  },
  created() {
    this.getAllPosts();
    // this.getComments();
  },

  methods: {
    async getAllPosts() {
      try {
        HTTP.get(`posts.json`).then((r) => (this.posts = r.data));
      } catch (error) {
        // this.$router.push("/");
        console.log("no posts here");
      }
    },
  },
};
</script>

<style scoped>
table {
  background: #666;
  border-collapse: separate;
  border-spacing: 5px 15px;
  padding: 5px;
}
thead {
  background: rgb(190, 190, 190);
}
tbody {
  background: rgb(134, 134, 134);
}
th,
td {
  color: rgba(255, 255, 255, 0.651);
}

a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: rgb(68, 209, 68);
}
th {
  font-weight: bold;
}
.bg-green {
  background: green;
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

td a {
  display: block;
}
td[class="bg-green"]:hover {
  background: rgb(119, 148, 119);
}
</style>