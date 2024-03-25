import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    // message: "ciao",
    products: [],
    urlApi: 'http://localhost:3000/products',

    addElement(url) {
        axios.get(url).then(response =>
            //this.products = response.data,
            //console.log(response.data)
            this.products = response.data)
    },


})
