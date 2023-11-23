<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Post } from '../interfaces';

const props = defineProps<{
    inputPost: Post | null
}>()
defineEmits<{
    (e: 'cancel'): void,
    (e: 'save', post: Post): void
}>()

const post: Ref<Post> = ref({
    title: "",
    subtitle: "",
    date: "",
    author: "",
    isPublised: true
})
if (props.inputPost !== null) {
    post.value = {...props.inputPost}
}
</script>

<template>
    <div>
        Título <input type="text" v-model="post.title">
    </div>
    <div>
        Subtítulo <input type="text" v-model="post.subtitle">
    </div>
    <div>
        Fecha <input type="text" v-model="post.date">
    </div>
    <div>
        Autor <input type="text" v-model="post.author">
    </div>
    <div>
        Publicado <input type="checkbox" v-model="post.isPublised">
    </div>

    <button @click="$emit('save', post)">Guardar</button>
    <button @click="$emit('cancel')">Cancelar</button>
</template>