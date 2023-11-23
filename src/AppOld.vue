<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const nombre = ref("")
const apellido = ref("")
const counter = ref(0)
const mostrarMensaje = ref(true)
let tareas = reactive([
  "Aprender Javascript",
  "Apender Vue",
])
const nuevaTarea = ref("")


const mensaje = computed(() => {
  return `Hola ${nombre.value} ${apellido.value}!`
})

const incrementCounter = () => {
  counter.value++
}
const decrementCounter = () => {
  counter.value--
}
const agregarTarea = () => {
  if (nuevaTarea.value !== "") {
    tareas.push(nuevaTarea.value)
  }
  nuevaTarea.value = ""
}
</script>

<template>
  <div>
    <ul>
      <li v-for="tarea in tareas" :key="tarea">{{ tarea }}</li>
    </ul>
    <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTarea">
    <button @click="agregarTarea" :disabled="nuevaTarea === ''">Agregar</button>
  </div>
  <div>
    Mostrar mensaje <input type="checkbox" v-model="mostrarMensaje">
  </div>
  <div>
    Nombre: <input type="text" v-model="nombre">
    Apellido: <input type="text" v-model="apellido"> <br>
    <template v-if="mostrarMensaje"> {{ mensaje }} </template>
    <template v-else> No hay mensaje </template>
  </div>
  <div class="count" :class="counter >= 10 ? 'counter-green' : 'counter-red'">
    Contador: {{ counter }}
  </div>
  <div>
    <button @click="incrementCounter">
      Contador ++
    </button>
    <button @click="decrementCounter" :disabled="counter <= 0">
      Contador --
    </button>
  </div>
</template>

<style scoped>
.count {
  font-size: xx-large;
}

.counter-green {
  color: green;
}

.counter-red {
  color: red;
}
</style>
