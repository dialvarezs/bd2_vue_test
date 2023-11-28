<template>
<div class="header">
    <RouterLink class="header-item" :to="{name: 'Basics'}">Inicio</RouterLink>
    <RouterLink class="header-item" :to="{name: 'Advanced'}">Blog</RouterLink>
</div>
</template>

<style scoped>
a {
    color: white;
}
.header {
    padding: 2em;
    background-color: #444444;
    color: white;
    margin-bottom: 2em;
}
.header-item {
    margin-left: 1em;
    margin-right: 1em;
}
</style>