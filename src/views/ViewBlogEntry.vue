<script setup lang="ts">
import { computed } from "vue";
import useMainStore from "../stores/main"
import { useRoute } from 'vue-router'

const route = useRoute()
const mainStore = useMainStore()
const post = computed(() => mainStore.getPost(Number(route.params.id)))

</script>

<template>
    {{ post }}
</template>