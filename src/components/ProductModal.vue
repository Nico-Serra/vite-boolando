<script>

export default {
    name: 'ProductModal',
    props: {
        singleProduct: Object,
        showModal: true
    },
    emit: ['closeModal']
}
</script>

<template>
    <div class="modal">
        <div class="image">
            <img :src="'/img/' + singleProduct.firstImage" alt="" class="image1">
            <img :src="'/img/' + singleProduct.secondImage" alt="" class="image2">
        </div>
        <div class="text">
            <h3>Brand: {{ singleProduct.brand }}</h3>
            <h2>{{ singleProduct.nameProduct }}</h2>
            <h4 class="red">Prezzo scontato: {{ singleProduct.salesPrice }}</h4>
            <h4 v-if="singleProduct.price" class="gray">Prezzo: {{ singleProduct.price }}</h4>
            <span @click="$emit('closeModal')">❌</span>
        </div>
    </div>
</template>

<style>
.image:hover {
    .image1 {
        display: none;
    }

    .image2 {
        display: block;
    }
}
</style>