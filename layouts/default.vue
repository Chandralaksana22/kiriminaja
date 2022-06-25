<template>
    <div>
        <NavbarPage/>
            <Nuxt/>
        <FooterPage/>
    </div>
</template>
<script>
import NavbarPage from '../components/inc/NavbarPage.vue'
import FooterPage from '../components/inc/FooterPage.vue'
export default {
    name : 'DefaultPage',
    components :{
    NavbarPage,
    FooterPage,
}
}
</script>