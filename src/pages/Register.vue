<template>
  <h1>Welcome to Register area</h1>
  <hr />
  <form action @submit.prevent="login">
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
    <br />
    <legend for="password">Repeat password</legend>
    <input
      type="password"
      name="password2"
      id="password2"
      v-model="username2"
      placeholder=" *** "
    />
    <br />
    <p v-if="error">Something went wrong</p>
    <br />
    <input type="submit" value="Enter" />
    <hr />
  </form>
</template>

<script>
export default {
  name: "Registro",
  data() {
    return {
      email: "",
      username: "",
      username2: "",
      error: false,
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.username);
      console.log(this.username2);
      console.log("alsakjd");
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