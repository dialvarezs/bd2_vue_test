<script setup lang="ts">
import { Post } from "../interfaces"
import BlogPost from "../components/BlogPost.vue"
import PostForm from "../components/PostForm.vue"
import Card from "../components/Card.vue"
import useMainStore from "../stores/main"
import { Ref, onBeforeMount, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia"

const mainStore = useMainStore()
const { publishedPosts } = storeToRefs(mainStore)

const editPost = ref(false)
const selectedPostId: Ref<number | null> = ref(null)
const selectedPost: Ref<Post | null> = ref(null)


watch(selectedPostId, (newValue, oldValue) => {
  alert(`selected post cambio de valor desde ${oldValue} por ${newValue}`)
})


const savePost = (post: Post) => {
  if (selectedPost.value !== null && selectedPostId.value !== null) {
    mainStore.setPost(selectedPostId.value, post)
    selectedPost.value = selectedPostId.value = null
  } else {
    mainStore.addPost(post)
  }
  editPost.value = false
}
const triggerEditPost = (postId: number) => {
  selectedPostId.value = postId
  selectedPost.value = mainStore.getPost(postId)
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
