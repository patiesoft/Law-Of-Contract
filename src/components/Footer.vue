<template>
    <!-- Footer -->
    <mdb-footer color="blue" class="font-small pt-4  c" >
        <mdb-container class="text-left">
            <mdb-row>
                <mdb-col sm="6">
                <h5 class="title">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
                </mdb-col>
                <mdb-col sm="6">
                <h5 class="title">Links</h5>
                <ul>
                    <li class="list-unstyled"><a href="https://learn.uniswa.sz/">Moodle</a></li>
                    <li class="list-unstyled"><a href="http://www.library.uniswa.sz/pastpapers/lawmain.html">Past Papers</a></li>
                    <li class="list-unstyled"><a href="#!">Link 3</a></li>
                    <li class="list-unstyled"><a href="#!">Link 4</a></li>
                </ul>
                </mdb-col>
            </mdb-row>
        </mdb-container>
        <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
            &copy; 2020 Copyright: <a href="http://www.ide.uneswa.ac.sz/">Institute of Distant education</a>
        </mdb-container>
        </div>
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