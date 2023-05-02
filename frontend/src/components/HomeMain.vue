<template>
    <main class="flex-column w-100 d-flex justify-content-center align-items-center">
        <div style=" width: 40%; margin-top: -5%;">
            <h1 class="m-auto text-center text-light fw-bolder">QUER MARCAR</h1>
            <h1 class="m-auto text-center text-light fw-bolder">ALGO <strong style="color: darkorchid;">COMIGO</strong>?</h1>
        </div>
        <router-link class="btn btn-lg fs-3" role="button" to="/register">Registre-se</router-link>
    </main>
</template>

<script>
    export default {
        name: 'HomeMain',
    }
</script>

<style scoped>
    a {
        background-color: #4F18BB;
        color: white;
        font-family: 'Bebas Neue', cursive;
        transition: .5s ease;
    }

    h1 {
        font-size: 5rem;
    }

    a:hover {
        background-color: white;
        color: #4F18BB;
    }

    @media (max-width: 600px) {

        main > div {
            width: 100vw !important;
        }

        h1 {
            font-size: 2.7rem;
        }
    }

</style>