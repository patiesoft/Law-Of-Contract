<template>
  <div class="bg">
    <section>
      <div class="container">
        <div class="row flex justify-content-center text-center pt-4">
          <!-- First col -->
          <div class="col d-flex justify-content-center text-center">
            <!-- First card -->
            <div class="card post-title-panel special-card">
              <div class="card-body mslide">
                  <div class="container-fluid border border-info s py-2 text">
                    <h2 class="text-center font-weight-bold myCustColor">Welcome to LAW OF CONTRACT II</h2>
                    <h2 class="text-center font-weight-bold myCustColor">IDE-LAW 204</h2>
                    <h4 class="text-center font-weight-bold myCustColor">Instructor : T. Hlatshwayo</h4>
                  </div>  
              </div>
            </div>
            <!-- /.First card -->
          </div>
        </div>
      </div>
    </section>
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