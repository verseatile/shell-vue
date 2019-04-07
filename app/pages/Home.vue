<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <h1 v-on:click="cladow">yo</h1>
  </div>
</template>

<script>
  /***
   *  import vue components here, place them in the components property
   *  
   *  components: { MyComponent },

   *  */ 

  export default {
    name: 'Land',
    components: { },
    methods: {
      cladow: function(e) {
        console.log('cladow!', e.target)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

</style>
