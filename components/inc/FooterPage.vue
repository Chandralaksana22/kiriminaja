<template>
<div class="container">
  <footer class="row row-cols-5 py-5 my-5">
    <div class="col-3">
    <a class="navbar-brand" href="#">
        <img src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg" width="145px" alt="brand">
    </a>
    <div class="row g-0 mt-4">
        <div class="col-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" fill-opacity="0.3" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="11" r="3"></circle>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>                            
        </div>
        <div class="col">
          <p class="text-muted"><small>Jl. Palagan Tentara Pelajar No. 30 KM 08, Mudal, Kelurahan Sariharjo, Kecamatan Ngaglik, Kabupaten Sleman, Provinsi Daerah Istimewa Yogyakarta</small></p>
        </div>
      </div>
    </div>
      <div class="col">
    </div>

    <div class="col-3">
      <h5><strong>Tautan Cepat</strong></h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong>Cek Tarif Aja</strong></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong>Kabar Untukmu</strong></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong>Manajemen Order</strong></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong>Integrasi API</strong></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong>Karir</strong></a></li>
      </ul>
    </div>
    <div class="col-3">
      <h5><strong>KiriminAJA</strong></h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong><NuxtLink class="text-muted text-decoration-none" to="/about">Tentang Kami</NuxtLink></strong></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong>Syarat & Ketentuan</strong></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><strong>Kebijakan Privasi</strong></a></li>
      </ul>
    </div>
  </footer>
</div>
</template>
<script>
export default {
  name: 'FooterApp',
}
</script>
