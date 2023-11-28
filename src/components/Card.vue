<template>
<div class="card">
    <div class="card-header">
        <slot name="header">
            Este es header por defecto
        </slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        Este es el pie de la tarjeta
    </div>
</div>
</template>

<style scoped>
.card {
    border: 3px solid red;
}
.card-header {
    background-color: gray;
}
</style>