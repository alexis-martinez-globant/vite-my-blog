<template>
  <h1>
    Post <span>{{ id }}</span>
  </h1>

  <div v-if="post">
    <table border="1">
      <thead>
        <tr>
          <th>User id</th>
          <th>Post id</th>
          <th>Title</th>
          <th>Texto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <table border="1">
      <thead>
        <tr>
          <!-- <th>Post id</th> -->
          <!-- <th>User Email</th> -->
          <!-- <th>Title</th> -->
          <th>Comments for de post: {{ post.id }}</th>
        </tr>
      </thead>

      <tbody>
        <div v-for="comment in comments" :key="comment.id">
          <div v-if="comment.postId === post.userId">
            <!-- <td>{{ comment.postId }}</td> -->
            <tr>
              <td>{{ comment.email }}</td>
            </tr>
            <tr>
              <td>{{ comment.name }}</td>
            </tr>
            <tr>
              <td>{{ comment.body }}</td>
            </tr>
            <hr />
          </div>
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
import { HTTP } from "../services/http-common";
export default {
  data() {
    return {
      post: null,
      comment: null,
      comments: null,
    };
  },

  created() {
    this.getPost();
    this.getAllComments();
    this.readParams();
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    postId: {
      type: Number,
      required: true,
    },
  },

  methods: {
    async getPost() {
      try {
        HTTP.get(`posts/${this.id}.json`).then((r) => (this.post = r.data));
      } catch (error) {
        // this.$router.push("/");
        console.log("no post here");
      }
    },
    async getAllComments() {
      try {
        HTTP.get(`comments.json`).then((r) => (this.comments = r.data));
      } catch (error) {
        // this.$router.push("/");
        console.log("no comment here");
      }
    },

    async readParams() {
      console.log(this.post);
      console.table(this.comments);
      console.log(this.id);
      console.table(this.postId);
    },
  },
  // watch: {
  //   id() {
  //     this.getPost();
  //   },
  //   // postId() {
  //   //   this.getComment();
  //   // },
  // },
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
  background: rgb(136, 134, 134);
}
th,
td {
  color: rgba(255, 255, 255, 0.651);
  padding: 5px;
}
div:nth-child(3) > table {
  width: 70%;
  margin: 0 auto;
}
#app > div:nth-child(3) > table > tr:nth-child(1) > th:nth-child(1),
#app > div:nth-child(3) > table > tr:nth-child(1) > th:nth-child(2) {
  width: 10%;
}
div:nth-child(4) > table > tr:nth-child(4) > td:nth-child(2) {
  width: 50%;
}
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(1),
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(2),
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(3),
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(4) {
  vertical-align: initial;
  padding-top: 5px;
}

hr {
  margin: 20px 10px;
  background-color: #000;
  height: 2px;
}
</style>