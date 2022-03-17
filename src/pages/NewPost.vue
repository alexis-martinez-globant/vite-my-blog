<template>
  <h1>Post: {{ titulo }}</h1>
  <div>
    <table border="1">
      <tr>
        <th>Title</th>
        <th>Text</th>
      </tr>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              id="titulo"
              placeholder="New title"
              v-model="titulo"
              @keydown="counter1change"
              maxlength="25"
            />
            <!-- <span id="spanTitulo">{{ counter1 }}</span> -->
            <span v-bind:class="{ textRed: counterTitle }">{{ counter1 }}</span>
          </td>
          <td>
            <textarea
              type="text"
              name="textarea"
              placeholder="New text"
              v-model="texto"
              @keydown="counter2change"
              maxlength="256"
            />
            <!-- <span id="spanTexto">{{ counter2 }}</span> -->
            <span v-bind:class="{ textRed: counterText }">{{ counter2 }}</span>
          </td>
          <td>
            <button type="submit" @click="botonClick">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // props: {
  //   titulo: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  data: function () {
    return {
      titulo: "",
      texto: "",
      counter1: 25,
      counter2: 256,
      counterTitle: false,
      counterText: false,
    };
  },
  methods: {
    counter1change() {
      this.counter1 = 25;
      this.counter1 = this.counter1 - this.titulo.length;

      if (this.counter1 < 6) {
        this.counterTitle = true;
      } else {
        this.counterTitle = false;
      }

      return this.counter1;
    },

    counter2change() {
      this.counter2 = 256;
      this.counter2 = this.counter2 - this.texto.length;

      if (this.counter2 < 11) {
        this.counterText = true;
      } else {
        this.counterText = false;
      }

      return this.counter2;
    },
    botonClick() {
      alert("click");
    },
  },
};
</script>

<style scoped>
table {
  background: rgb(190, 190, 190);
}
tbody {
  background: rgb(136, 134, 134);
}
th,
td {
  color: rgba(255, 255, 255, 0.651);
}
td {
  min-height: 20px;
}

div:nth-child(3) > table {
  width: 70%;
  margin: 0 auto;
}
#app > div:nth-child(3) > table > tr:nth-child(2) > th:nth-child(1),
#app > div:nth-child(3) > table > tr:nth-child(2) > th:nth-child(2) {
  width: 10%;
}
div:nth-child(4) > table > tr:nth-child(4) > td:nth-child(2) {
  width: 50%;
}
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(1),
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(2) {
  vertical-align: initial;
  padding-top: 5px;
  width: 45%;
}
#app > div:nth-child(3) > table > tr:nth-child(2) > td:nth-child(1) {
  vertical-align: middle;
}
input {
  width: 90%;
}

textarea {
  resize: none;
  width: 90%;
  height: 25vh;
  margin: 20px auto 5px;
}

button {
  background: green;
  color: #fff;
  font-size: 1rem;
  border-radius: 50%;
  padding: 15px;
}
span {
  color: rgb(48, 48, 48);
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0 0 0 80%;
}

.textRed {
  color: red;
}
</style>