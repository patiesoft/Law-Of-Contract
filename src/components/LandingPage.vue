<template>
  <div class="bg container-fluid">
    
  </div>
</template>


<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mslide{
  background-color: #e1f5fe;
  
}
.myCustColor{
  color: #ff1744;
  -webkit-transition: .4s;
  transition: .4s; }
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");

    /* Full height */
    height: 700px;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .special-card {
/* create a custom class so you 
   do not run into specificity issues 
   against bootstraps styles
   which tends to work better than using !important 
   (future you will thank you later)*/

  background-color: rgba(245, 245, 245, 1);
  opacity: .4;
}
</style>
