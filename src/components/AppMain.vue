<script>
import ProductCard from './ProductCard.vue';

import { state } from '../state'

import ProductModal from './ProductModal.vue'


export default {
    name: 'AppMain',
    data() {
        return {
            /*products: [
                {
                    visible:false,
                    firstImage: '1.webp',
                    secondImage: '1b.webp',
                    price: '29.99€',
                    salesPrice: '14.99€',
                    discount: '50%',
                    eco: 'Sostenibilità',
                    brand: "Levi's",
                    nameProduct: 'RELAXED FIT TEE UNISEX'
                },
                {
                    visible:false,
                    firstImage: '2.webp',
                    secondImage: '2b.webp',
                    price: '29.99€',
                    salesPrice: '20,99€',
                    discount: '30%',
                    eco: false,
                    brand: "Guess",
                    nameProduct: 'ROSES TEE'
                },
                {
                    visible:false,
                    firstImage: '3.webp',
                    secondImage: '3b.webp',
                    price: '184,99€',
                    salesPrice: '129,99€',
                    discount: '30%',
                    eco: false,
                    brand: "Come Zucchero Filato",
                    nameProduct: 'VOGLIA DI COLORI PASTELLO'
                },
                {
                    visible:false,
                    firstImage: '4.webp',
                    secondImage: '4b.webp',
                    price: '29.99€',
                    salesPrice: '14.99€',
                    discount: '50%',
                    eco: 'Sostenibilità',
                    brand: "Levi's",
                    nameProduct: 'TEE UNISEX'
                },
                {
                    visible:false,
                    firstImage: '5.webp',
                    secondImage: '5b.webp',
                    price: false,
                    salesPrice: '14.99€',
                    discount: false,
                    eco: false,
                    brand: "Maya Deluxe",
                    nameProduct: 'STRIPE BODICE'
                },
                {
                    visible:false,
                    firstImage: '6.webp',
                    secondImage: '6b.webp',
                    price: false,
                    salesPrice: '29.99€',
                    discount: false,
                    eco: 'Sostenibilità',
                    brand: "Espirit",
                    nameProduct: 'MAGLIONE - BLACK'
                },
            ],*/
            state,
            urlApi: 'http://localhost:3000/products',
            showModal: false,
            singleProduct: {

            }
        }
    },
    components: {
        ProductCard,
        ProductModal,

    },

    mounted() {
        //console.log(this.state.products);
        this.state.addElement(this.urlApi)
        //console.log(state.products);
        //console.log(state.products);
        console.log(this.singleProduct);
    },
    methods: {
        openModal(product) {
            console.log('ciao');
            this.singleProduct = product,
                this.showModal = true

        },
        closeModal() {
            this.showModal = false
        }
    }
}
</script>

<template>
    <main id="site_main">
        <ProductModal :singleProduct="singleProduct" @closeModal="closeModal" v-if="showModal === true" />
        <div class="container">
            <h1></h1>
            <!-- <p>{{ state.message }}</p> -->
            <div class="row">
                <ProductCard :product="product" v-for="product in state.products" @showProduct="openModal" />

            </div>
        </div>

        <!-- Second line description -->
    </main>

</template>

<style>

</style>