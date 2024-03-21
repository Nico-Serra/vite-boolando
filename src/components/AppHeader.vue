<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            visible: false,
            visibleMan: false,
            visibleKids: false,
        }
    }
}
</script>

<template>
    <header id="site_header">
        <div class="container d-flex">
            <ul class="gender d-flex">
                <li class="padding-left">
                    <a href="" @mouseover="visible = true" @mouseout="visible = false">Donna</a>
                    <div v-show="visible === true" class="sub_menu" @mouseover="visible = true"
                        @mouseout="visible = false">
                        <div>Abbigliamento</div>
                        <div>scarpe</div>
                        <div>accessori</div>
                    </div>
                </li>
                <li class="padding-left">
                    <a href="" @mouseover=" visibleMan = true" @mouseout=" visibleMan = false">Uomo</a>
                    <div v-show="visibleMan === true" class="sub_menu" @mouseover=" visibleMan = true"
                        @mouseout=" visibleMan = false">
                        <div>Abbigliamento</div>
                        <div>scarpe</div>
                        <div>accessori</div>
                    </div>
                </li>
                <li class="padding-left">
                    <a href="" @mouseover="visibleKids = true" @mouseout="visibleKids = false">Bambino</a>
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
                <li class="padding-right"><a href=""><i class="fa-regular fa-user"></i></a></li>
                <li class="padding-right"><a href=""><i class="fa-regular fa-heart"></i></a></li>
                <li class="padding-right"><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
            </ul>
        </div>
    </header>

</template>

<style></style>