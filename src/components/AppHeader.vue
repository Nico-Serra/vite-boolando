<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            visible: false,
            visibleMan: false,
            visibleKids: false,
            visibleProfile: false,
            visibleFavorites: false,
            visibleShop: false,
            woman: 'Donna',
            man: 'Uomo',
            kids: 'Bambini',
            userIcon: 'fa-solid fa-user',
            heartIcon: 'fa-regular fa-heart',
            shopIcon: 'fa-solid fa-bag-shopping',
        }
    }
}
</script>

<template>
    <header id="site_header">
        <div class="container d-flex">
            <ul class="gender d-flex">
                <li class="padding-left">
                    <a href="" @mouseover="visible = true" @mouseout="visible = false">{{ woman }}</a>
                    <div v-show="visible === true" class="sub_menu" @mouseover="visible = true"
                        @mouseout="visible = false">
                        <div>Abbigliamento</div>
                        <div>scarpe</div>
                        <div>accessori</div>
                    </div>
                </li>
                <li class="padding-left">
                    <a href="" @mouseover=" visibleMan = true" @mouseout=" visibleMan = false">{{ man }}</a>
                    <div v-show="visibleMan === true" class="sub_menu" @mouseover=" visibleMan = true"
                        @mouseout=" visibleMan = false">
                        <div>Abbigliamento</div>
                        <div>scarpe</div>
                        <div>accessori</div>
                    </div>
                </li>
                <li class="padding-left">
                    <a href="" @mouseover="visibleKids = true" @mouseout="visibleKids = false">{{ kids }}</a>
                    <div v-show="visibleKids === true" class="sub_menu" @mouseover="visibleKids = true"
                        @mouseout="visibleKids = false">
                        <div>Abbigliamento</div>
                        <div>scarpe</div>
                        <div>accessori</div>
                    </div>
                </li>

            </ul>
            <img src="/img/boolean-logo.png" alt="" class="logo">
            <ul class="icon d-flex">
                <li class="padding-right">
                    <a href="" @mouseover="visibleProfile = true" @mouseout="visibleProfile = false"><i
                            :class="userIcon"></i></a>
                    <div v-show="visibleProfile === true" class="sub_menu2">
                        <div>Il Mio profilo</div>
                        <div>Accedi</div>
                        <div>Registrati</div>
                    </div>
                </li>
                <li class="padding-right">
                    <a href="" @mouseover="visibleFavorites = true" @mouseout="visibleFavorites = false"><i
                            :class="heartIcon"></i></a>
                    <div v-show="visibleFavorites === true" class="sub_menu2">
                        <div>I tuoi preferiti</div>
                        <div>Aggiungi</div>
                        <div>Rimuovi</div>
                    </div>
                </li>
                <li class="padding-right">
                    <a href="" @mouseover="visibleShop = true" @mouseout="visibleShop = false"><i
                            :class="shopIcon"></i></a>
                    <div v-show="visibleShop === true" class="sub_menu2">
                        <div>Aggiungi al carrello</div>
                        <div>Rimuovi dal carrello</div>
                        <div>Procedi con il pagamento</div>
                    </div>

                </li>
            </ul>
        </div>
    </header>

</template>

<style></style>