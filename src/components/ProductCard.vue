<script>
export default {
    name: 'ProductCard',
    props: {
        product: Object,
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <img :src="'/img/' + product.firstImage" alt="" class="image1">
            <img :src="'/img/' + product.secondImage" alt="" class="image2">
            <div>
                <div>{{ product.brand }}</div>
                <h3>{{ product.nameProduct }}</h3>
                <span class="red">{{ product.salesPrice }}</span>
                <span v-if="product.price" class="gray">{{ product.price }}</span>
                <div class="badge">
                    <div class="sales" v-if="product.discount">{{ product.discount }}</div>
                    <div class="eco" v-if="product.eco">{{ product.eco }}</div>

                </div>
                <div class="hearts">&hearts;</div>
            </div>
        </div>
    </div>
</template>

<style></style>