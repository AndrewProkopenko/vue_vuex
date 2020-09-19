<template>
    <div class="preloader-container">
        <div class="preloader-image"></div>
    </div>
</template>


<script>
export default {
    name: "Preloader"
}
</script>

<style scoped>
    .preloader-container { 
        position: absolute;
        top: 0;
        left: 0; 

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        min-height: 30vh;
        height: 100%;
        background: rgb(255, 255, 255);
    }
    .preloader-container .preloader-image { 
        width: 40px;
        height: 40px;
        background-image: url(../assets/logo.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: vue-preloader 600ms ease-in infinite alternate;
        transform-origin: center;
        transition: 300ms ease;
    }

    @keyframes vue-preloader {
        0% {
            transform: perspective(10px) translateZ(1px);
            opacity: .7; 
        }
        25% {
            transform:  perspective(10px) translateZ(-5px) rotate(360deg);
            opacity: .7;
        }
        50% { 
            transform: perspective(10px) translateZ(3px);
            opacity: .9;
        }  
    }
</style>