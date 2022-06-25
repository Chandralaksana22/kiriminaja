<template>
<body>
  <div class="container">
  <no-ssr> <!-- important to add no-ssr-->
  <carousel :responsive="{600:{items:1, nav:false,dots:true, autoplay:true}}" class="mt-5">
      <div v-for="banner in bannerkjList" :key="banner.id">
        <div class="card mt-5 border-0">
          <div class="card-body">
            <b-row class="mt-5 mb-5">
              <b-col cols="12" md="5">
                <img class="d-block img-fluid w-100" :src="banner.img" alt="image slot">
              </b-col>
              <b-col cols="12" md="7">
                <h2 class="text-black"><strong>{{banner.header}}</strong></h2>
                <p class="lead text-justify fs-6">{{banner.desc}}</p>
                <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg><a class="text-decoration-none ml-2 text-dark"><Strong>{{banner.list1}}</Strong></a>
                </div>
                <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg><a class="text-decoration-none ml-2 text-dark"><Strong>{{banner.list2}}</Strong></a>
                </div>
                <div class="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle text-warning" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg><a class="text-decoration-none ml-2 text-dark"><Strong>{{banner.list3}}</Strong></a>
                </div>
                <button class="buttonMore mw-100 btn-lg mt-4">Selengkapnya</button>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
  </carousel>
</no-ssr>

  <div class="mt-5">
    <img src="https://kiriminaja.com/assets/home-2/pesta-pora-new.png" alt="" class="img-fluid rounded w-100 shadow">
  </div>
  <div>
    <no-ssr> <!-- important to add no-ssr-->
      <carousel  :responsive="{0:{items:1,nav:false},600:{items:6,nav:false, dots:false, autoplay:true}}" class="mt-5">
        <div v-for="image in ekspedisiList" :key="image.id" class="mb-3 text-center">
            <img :src="image.image"  style="max-height: 50px; width: auto">
        </div>
      </carousel>
    </no-ssr>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <h3>Untuk Semua Kebutuhan Pengiriman Paketmu</h3>
  </div>
  <div class="mt-5">
    <b-row>
      <b-col cols="12" md="4">
        <div class="card shadow mb-2 rounded-3">
          <div class="card-body">
            <b-row>
              <b-col cols="4">
                <div class="text-center"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-armchair-2 text-primary" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" fill-opacity="0.5" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"></path>
                  <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"></path>
                  <path d="M8 12h8"></path>
                  <path d="M7 19v2"></path>
                  <path d="M17 19v2"></path>
                  </svg>
                </div>
              </b-col>
              <b-col cols="8">
                <h5><strong >Layanan Terintegrasi</strong></h5>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="card shadow mb-2 rounded-3">
          <div class="card-body">
            <b-row>
              <b-col cols="4">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check text-primary" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" fill-opacity="0.5" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 12l2 2l4 -4"></path>
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
                  </svg>
                </div>
              </b-col>
              <b-col cols="8">
                <h5><strong >Ekspedisi Terbaik</strong></h5>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="card shadow mb-2 rounded-3">
          <div class="card-body">
            <b-row>
              <b-col cols="4">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon text-primary" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" fill-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
                </div>
              </b-col>
              <b-col cols="8">
                <h5><strong >Friendly</strong></h5>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="card shadow mb-2 rounded-3">
          <div class="card-body">
            <b-row>
              <b-col cols="4">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon text-primary" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" fill-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline></svg>
                </div>
              </b-col>
              <b-col cols="8">
                <h5><strong >Sistem Otomatis</strong></h5>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="card shadow mb-2 rounded-3">
          <div class="card-body">
            <b-row>
              <b-col cols="4">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon text-primary" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="13" rx="2" width="4" fill-opacity="0.5" fill="currentColor" height="6"></rect>
                  <rect x="16" y="13" rx="2" width="4" fill-opacity="0.5" fill="currentColor" height="6"></rect>
                  <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                  <path d="M18 19a6 3 0 0 1 -6 3"></path>
                  </svg>
                </div>
              </b-col>
              <b-col cols="8">
                <h5><strong >Selalu Ada Untukmu</strong></h5>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="card shadow mb-2 rounded-3">
          <div class="card-body">
            <b-row>
              <b-col cols="4">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-check text-primary" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" fill-opacity="0.5" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                  <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                  <path d="M9 14l2 2l4 -4"></path>
                  </svg>
                </div>
              </b-col>
              <b-col cols="8">
                <h5><strong >Laporan Aktual</strong></h5>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
  <div class="text-center mt-5">
    <h3>Kirim Paket Makin Singkat</h3>
    <h6 class="lead">Masih kurang? Yuk explore sekarang biar ngga penasaran</h6>
  </div>
  <div class="mt-5 mb-5">
    <b-row>
      <b-col lg="7">
        <img src="https://kiriminaja.com/assets/banner-home-2.png" alt="" class="img-fluid">
      </b-col>
      <b-col lg>
        <div class="card shadow mb-2 rounded-3" style="max-height: 76px">
          <div class="card-body">
            <b-row>
              <b-col cols="2">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-warning" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg>
                </div>
              </b-col>
              <b-col cols="10">
                <h6><strong>Berbagai service expedisi sameday, kargo dan lainnya.</strong></h6>
              </b-col>
            </b-row>
          </div>
        </div>
        <div class="card shadow mb-2 rounded-3" style="max-height: 76px">
          <div class="card-body">
            <b-row>
              <b-col cols="2">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-warning" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg>
                </div>
              </b-col>
              <b-col cols="10">
                <h6><strong>Penjemputan paket tanpa minimal kiriman.</strong></h6>
              </b-col>
            </b-row>
          </div>
        </div>
        <div class="card shadow mb-2 rounded-3" style="max-height: 76px">
          <div class="card-body">
            <b-row>
              <b-col cols="2">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-warning" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg>
                </div>
              </b-col>
              <b-col cols="10">
                <h6><strong>Fitur dropoff atau cashless.</strong></h6>
              </b-col>
            </b-row>
          </div>
        </div>
        <div class="card shadow mb-2 rounded-3" style="max-height: 76px">
          <div class="card-body">
            <b-row>
              <b-col cols="2">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-warning" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg>
                </div>
              </b-col>
              <b-col cols="10">
                <h6><strong>Kirim paket COD dengan pencairan tercepat.</strong></h6>
              </b-col>
            </b-row>
          </div>
        </div>
        <div class="card shadow mb-2 rounded-3" style="max-height: 76px">
          <div class="card-body">
            <b-row>
              <b-col cols="2">
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle text-warning" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                  </svg>
                </div>
              </b-col>
              <b-col cols="10">
                <h6><strong>Platform mudah digunakan (<i>user friendly</i>).</strong></h6>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</div>
</body>
</template>
<script>
export default {
    name: "IndexPage",
    computed : {
      ekspedisiList(){
        return this.$store.state.ekspedisi.list
      },
      bannerkjList(){
        return this.$store.state.bannerkj.list
      },
    },
    mounted (){
    this.$store.dispatch('ekspedisi/fetchEkspedisi')
    this.$store.dispatch('bannerkj/fetchBannerkj')
    },    
}
</script>
