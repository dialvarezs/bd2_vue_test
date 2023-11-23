<script setup lang="ts">
defineProps<{
    postId: number,
    title: string,
    subtitle: string,
    date: string
    author?: string
}>()
const emit = defineEmits<{
    (e: 'edit', postId: number): void
}>()
</script>

<template>
    <div class="post-container">
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
        <span>
            {{ date }}
            <template v-if="author">
                [{{ author }}]
            </template>
        </span>
        <div>
            <button @click="emit('edit', postId)">Editar</button>
        </div>
    </div>
</template>

<style scoped>
.post-container {
    border: solid 1px grey;
    box-shadow: 10px 5px 5px black;;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 1em;
}
</style>