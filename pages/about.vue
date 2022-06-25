<template>
<div class="container mt-5">
    <div class="card border-0 mt-5">
    <div class="card-body mt-5">
            <div class="mt-5 text-center">
                <h3 class="text-primary"><strong>Memberi solusi teknologi</strong></h3><br>
                <p class="mt-n4"><strong>untuk kebutuhan supply chain yang mempermudah ekosistem bisnis Indonesia berkembang.</strong></p>
                <img src="https://kiriminaja.com/assets/atrust/all_team.jpg" alt="" class="img-fluid rounded shadow">
            </div>
    </div>
    </div>
    <div class="text-center mt-5">
        <h2><strong>Tentang KiriminAja</strong></h2>
        <p class="lead"><small>KiriminAja sebuah platform yang memberikan kemudahan untuk pengiriman paket dan menemukan ekspedisi sesuai kebutuhan masyarakat, dengan metode pengiriman COD dan Non-COD yang dikembangkan oleh PT Selalu Siap Solusi.

KiriminAja memberikan solusi untuk UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin melakukan pengiriman paket.</small></p>
    </div>
    <div class="text-center mt-5">
        <h2><strong>Our Teams</strong></h2></div>
    <div class="mb-5 mt-5 text-center mr-auto ml-auto">
        <div class="row justify-content-center">
            <div v-for="team in aboutList" :key="team.id" col="col-6 col-md-4 p-5 ml-5 mr-5" >
                <div class="card border-0 mb-2 ml-2 mr-2" style="width: 18rem;">
                <img :src="team.img" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-text"><strong>{{team.nama}}</strong></h6>
                    <p class="lead">{{team.jabatan}}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'AboutPage',
  computed : {
      aboutList(){
        return this.$store.state.about.list
      }
    },
    mounted (){
    this.$store.dispatch('about/fetchAbout')
    },    
}
</script>
