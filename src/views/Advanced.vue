<script setup lang="ts">
import { Post } from "../interfaces"
import BlogPost from "../components/BlogPost.vue"
import PostForm from "../components/PostForm.vue"
import Card from "../components/Card.vue"
import { Ref, computed, onBeforeMount, onMounted, reactive, ref, watch } from "vue";

const posts: Post[] = reactive([
  { title: 'Explorando el Espacio: La Nueva Frontera', subtitle: 'Un vistazo a las misiones espaciales actuales', date: '22/11/2023', isPublised: true },
  { title: 'Innovaciones en Energía Renovable', subtitle: 'Cómo el sol y el viento están moldeando el futuro', date: '21/11/2023', isPublised: false },
  { title: 'La Revolución de la Inteligencia Artificial', subtitle: 'Impacto y ética en la tecnología moderna', date: '23/11/2023', isPublised: true },
  { title: 'Maravillas del Mundo Antiguo', subtitle: 'Un viaje a través de monumentos históricos', date: '23/10/2023', isPublised: false },
  { title: 'Gastronomía Global: Sabores del Mundo', subtitle: 'Descubriendo platos exóticos y tradiciones culinarias', date: '23/03/2023', author: "Diego Alvarez", isPublised: true }
]);
const editPost = ref(false)
const selectedPostId: Ref<number | null> = ref(null)
const selectedPost: Ref<Post | null> = ref(null)

const publishedPosts = computed(() => {
  return posts.filter(x => x.isPublised)
})

watch(selectedPostId, (newValue, oldValue) => {
  alert(`selected post cambio de valor desde ${oldValue} por ${newValue}`)
})


const savePost = (post: Post) => {
  if (selectedPost.value !== null && selectedPostId.value !== null) {
    posts[selectedPostId.value] = post
    selectedPost.value = selectedPostId.value = null
  } else {
    posts.push(post)
  }
  editPost.value = false
}
const triggerEditPost = (postId: number) => {
  selectedPostId.value = postId
  selectedPost.value = posts[postId]
  editPost.value = true
}
const cancelEditPost = () => {
  selectedPost.value = selectedPostId.value = null
  editPost.value = false
}

onMounted(() => {
  console.log("Hola desde mounted")
})

onBeforeMount(() => {
  console.log("Hola desde before mounted")
})

console.log("Hola desde create")
</script>

<template>
  <Card>
    <template #header>
      Esto va dentro del header
    </template>
    <template #default>
      <h1>Esta es mi primera tarjeta</h1>
      <p>
        El contenido de mi tarjeta es muy genial
      </p>
      <button>Botón</button>
    </template>
  </Card>

  <button v-if="!editPost" @click="editPost = true">
    Nuevo Post
  </button>
  <PostForm v-if="editPost" :input-post="selectedPost" @save="savePost" @cancel="cancelEditPost">
  </PostForm>

  <template v-else>
    <BlogPost v-for="(post, i) in publishedPosts" :key="post.title" :post-id="i" :title="post.title"
      :subtitle="post.subtitle" :date="post.date" :author="post.author" @edit="triggerEditPost">
    </BlogPost>
  </template>
</template>

<style scoped></style>
