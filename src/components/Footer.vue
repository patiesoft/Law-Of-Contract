<template>
  <!-- Footer -->
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
      
        <mdb-col sm="6" lg="6">        
          <ul>            
            <li class="list-unstyled"><a href="#!">Past Papers</a></li>
          </ul>
        </mdb-col>
        <mdb-col sm="5" lg="6">        
          <ul>            
            <li class="list-unstyled"><a href="#!">Past Papers</a></li>
          </ul>
        </mdb-col>

      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="Intitude of Distance Education"> Intitude of Distance Education </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>