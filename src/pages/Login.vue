<template>
  <h1>Login or Register</h1>
  <hr />
  <form id="loginForm" @submit="checkForm">
    <legend for="email">Email</legend>
    <input
      type="email"
      name="email"
      id="email"
      v-model="email"
      placeholder=" ... "
    />
    <br />
    <br />
    <legend for="password">Password</legend>
    <input
      type="password"
      name="password"
      id="password"
      v-model="username"
      placeholder=" *** "
    />
    <br />
    <p v-if="error.length">Something went wrong</p>
    <br />
    <input type="submit" value="Enter" />
    <hr />
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      username: null,
      error: [],
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.username);
      console.log("login llamado");
    },

    checkForm(e) {
      // this.error = [];
      if (this.email && this.username) {
        return true;
      } else if (!this.email || !this.username) {
        this.error.push("Something went wrong");
      }

      login();
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
input[type="submit"] {
  background: green;
  color: #fff;
  font-size: 1rem;
  border-radius: 25px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  margin: 20px;
}
input {
  border-radius: 50px;
  padding: 10px;
  text-align: center;
}
legend {
  font-weight: bolder;
}
p {
  color: red;
}
</style>