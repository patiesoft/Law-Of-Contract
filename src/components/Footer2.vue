<template>
  <!-- Footer -->
  <mdb-footer color="red" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">University of eSwatini</h6>
          <h6 class="text-uppercase mb-4 font-weight-bold">Fuculty of Humanities</h6>
          <h6 class="text-uppercase mb-4 font-weight-bold">School of Law</h6>
          <h6 class="text-uppercase mb-4 font-weight-bold">Law of Contract II</h6>
          <h6 class="text-uppercase mb-4 font-weight-bold">Law204 </h6>
          
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
          <p><a href="#!">moodle</a></p>
          <p><a href="#!">Email</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><i class="fas fa-home mr-3"></i>Kwaluseni Swaziland</p>
          <p><i class="fas fa-envelope mr-3"></i> https://kwwebmail.uniswa.sz/</p>
          <p><i class="fas fa-phone mr-3"></i> +268 2517 0281</p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text">&copy; 2020 Copyright: <a href="http://www.ide.uneswa.ac.sz/">
              UNESWA</a></p>
        </mdb-col>
        <mdb-col md="4" lg="4" class="ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/IDEuneswa/"><i class="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1" href="https://twitter.com/IDEuneswa/"><i class="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'Footer',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>
<style  scoped>

.footer{
    background: #1e88e5; 
}
</style>