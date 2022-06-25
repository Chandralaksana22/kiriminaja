<template>
<div class="container mt-5">
    <div class="card border-0 mt-5">
    <div class="card-body mt-5">
    <b-row class="mt-5">
        <b-col cols="12" md="6">
            <h1 class="mt-5"><strong>Partner Ecosystem & Integrations</strong></h1>
            <p class="lead"><small>Kami bermitra dengan banyak ekspedisi terkemuka untuk membantu mengembangkan bisnis Anda lebih cerdas, lebih cepat, dan lebih kuat dari sebelumnya.</small></p>
            <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg><a class="text-decoration-none ml-2 text-dark"><Strong>Beragam pilihan expedisi & Layanan</Strong></a>
            </div>
            <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg><a class="text-decoration-none ml-2 text-dark"><Strong>Support Cash On Delivery</Strong></a>
            </div>
            <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg><a class="text-decoration-none ml-2 text-dark"><Strong>Dashboard Monitoring</Strong></a>
            </div>
            <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg><a class="text-decoration-none ml-2 text-dark"><Strong>Diskon ongkir dan Cashback ongkir</Strong></a>
            </div>
            <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg><a class="text-decoration-none ml-2 text-dark"><Strong>Customer Support Senin - Minggu</Strong></a>
            </div>
            <button class="buttonMore mw-100 btn-lg mt-4">Daftar Sekarang</button>
        </b-col>
        <b-col cols="12" md="6">
            <img src="https://kiriminaja.com/assets/cuate/memory-cuate.svg" alt="" class="img-fluid">
        </b-col>
    </b-row>       
    </div>
    </div>
    <div class="text-center mt-5">
        <h2><strong>Dipercayai oleh</strong></h2>
        <p class="lead"><small>KirimiAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan UMKM di seluruh Indonesia</small></p>
    </div>
    <div class="mt-5">
        <no-ssr> <!-- important to add no-ssr-->
        <carousel  :responsive="{0:{items:1,nav:false},600:{items:6,nav:false, dots:false, autoplay:true}}" class="mt-5">
            <div v-for="image in mitrakjList" :key="image.id" class="mb-3 text-center">
                <img :src="image.img"  style="max-height: 50px; width: auto">
            </div>
        </carousel>
        </no-ssr>
    </div>
    <div class="text-center mt-5">
        <h2><strong>Kurir Terhubung</strong></h2>
        <p class="lead"><small>KiriminAJA selalu terhubung dengan expedisi yang terbaik di Indonesia, dan akan terus bertambah lagi</small></p>
    </div>
    <div class="mb-5 mt-5">
        <no-ssr> <!-- important to add no-ssr-->
        <carousel  :responsive="{0:{items:1,nav:false},600:{items:6,nav:false, dots:false, autoplay:true}}" class="mt-5">
            <div v-for="image in ekspedisiList" :key="image.id" class="mb-3 text-center">
                <img :src="image.image"  style="max-height: 50px; width: auto">
            </div>
        </carousel>
        </no-ssr>
    </div>
</div>
</template>
<script>
export default {
  name: 'IntegrasiPage',
  computed : {
      ekspedisiList(){
        return this.$store.state.ekspedisi.list
      },
      mitrakjList(){
        return this.$store.state.mitrakj.list
      }
    },
    mounted (){
    this.$store.dispatch('ekspedisi/fetchEkspedisi')
    this.$store.dispatch('mitrakj/fetchMitrakj')
    },    
}
</script>
