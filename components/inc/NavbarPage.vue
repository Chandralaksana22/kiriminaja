<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow mb-5">
    <div class="container mt-2 mb-2">
    <a class="navbar-brand" href="#">
        <img src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg" width="145px" alt="brand">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link text-black text-decoration-none"  href="#"><small><strong><NuxtLink class="text-muted text-decoration-none" to="/">Beranda</NuxtLink></strong></small><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-4">
            <a class="nav-link text-black text-decoration-none"  href="#"><small><strong>Blog</strong></small><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-4">
            <a class="nav-link text-black text-decoration-none"  href="#"><small><strong>Kabar</strong></small><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item text-muted mr-4">
            <a class="nav-link text-muted " href="#"><small><strong><NuxtLink class="text-muted text-decoration-none" to="/integrasi">Integrasi API</NuxtLink></strong></small><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-4">
            <a class="nav-link text-black text-decoration-none"  href="#"><small><strong>Cek Ongkir</strong></small><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-4">
            <a class="nav-link text-black text-decoration-none"  href="#"><small><strong>Lacak</strong></small><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item mr-4">
            <a class="nav-link text-black text-decoration-none"  href="#"><small><strong>Daftar</strong></small><span class="sr-only">(current)</span></a>
        </li>
        </ul>
        <button class="buttonLogin">Masuk</button>
    </div>
    </div>
    </nav>
</template>
<script>
export default {
  name: 'NavbarApp',
}
</script>
