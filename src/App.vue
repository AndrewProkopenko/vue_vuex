<template>
  <div id="app" class="container">
    <Header />
    <router-view/>
  </div>
</template>
 
<script>
    import Header from "./views/Header";

    export default { 
    components: {
      Header
    }
  }
</script>
