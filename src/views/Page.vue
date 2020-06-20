<template>
  <mdb-container fluid>
    <!-- Section: Create Page -->
    <section class="section mt-5">
      <!-- First row -->
      <div class="row">
        <!-- First col -->
        <div class="col-lg-8">
          <!-- First card -->
          <div class="card mb-4 post-title-panel">
            <div class="card-body">
              <mdb-input
                label="Post title"
                placeholder="Lorem ipsum dolor sit amet delit"
              />
            </div>
          </div>
          <!-- /.First card -->

          <!-- Second card -->
          <div class="card mb-4">
            <div class="card-body">
              <mdb-textarea />
            </div>
          </div>
          <!-- /.Second card -->

          <!-- Third Card -->
          <div class="card mb-4">
            <div class="card-body">
              <mdb-textarea label="Custom CSS Code" />
            </div>
          </div>
          <!-- /.Third Card -->
        </div>
        <!-- /.First col -->
        <!-- Second col -->
        <div class="col-lg-4">
          <!--Card-->
          <div class="card card-cascade narrower mb-4">
            <!--Card image-->
            <div class="view view-cascade gradient-card-header blue-gradient">
              <h4 class="mb-0">Publish</h4>
            </div>
            <!--/Card image-->

            <!--Card content-->
            <div class="card-body card-body-cascade">
              <p>
                <i class="fas fa-flag mr-1" aria-hidden="true"></i> Status:
                <strong>Draft</strong>
              </p>
              <p>
                <i class="fas fa-eye mr-1" aria-hidden="true"></i> Visibility
                <strong>Public</strong>
              </p>
              <p>
                <i class="fas fa-archive mr-1 mr-1" aria-hidden="true"></i>
                Revisions: <strong>2</strong>
              </p>
              <p>
                <i class="fas fa-calendar mr-1" aria-hidden="true"></i> Publish:
                <strong>Immediately</strong>
              </p>
              <div class="text-right">
                <mdb-btn flat dark-waves>Discard</mdb-btn>
                <mdb-btn color="primary">Publish</mdb-btn>
              </div>
            </div>
            <!--/.Card content-->
          </div>
          <!--/.Card-->
          <br />
          <!--Card-->
          <div class="card card-cascade narrower mb-4">
            <!--Card image-->
            <div class="view view-cascade gradient-card-header blue-gradient">
              <h4 class="mb-0">Categories</h4>
            </div>
            <!--/Card image-->

            <!--Card content-->
            <div class="card-body card-body-cascade">
              <fieldset class="form-check mb-4">
                <input class="form-check-input" type="checkbox" id="color-1" />
                <label class="form-check-label" for="color-1"
                  >Material Design</label
                >
              </fieldset>
              <fieldset class="form-check mb-4">
                <input class="form-check-input" type="checkbox" id="color-2" />
                <label class="form-check-label" for="color-2">Tutorials</label>
              </fieldset>
              <fieldset class="form-check mb-4">
                <input class="form-check-input" type="checkbox" id="color-3" />
                <label class="form-check-label" for="color-3"
                  >Marketing Automation</label
                >
              </fieldset>
              <fieldset class="form-check mb-4">
                <input class="form-check-input" type="checkbox" id="color-4" />
                <label class="form-check-label" for="color-4"
                  >Design Resources</label
                >
              </fieldset>
              <fieldset class="form-check">
                <input class="form-check-input" type="checkbox" id="color-5" />
                <label class="form-check-label" for="color-5"
                  >Random Stories</label
                >
              </fieldset>
            </div>
            <!--/.Card content-->
          </div>
          <!--/.Card-->
        </div>
        <!-- /.Second col -->
      </div>
      <!-- /.First row -->
    </section>
    <!-- /.Section: Create Page -->
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbBtn,
  mdbInput,
  mdbTextarea
} from "mdbvue";

export default {
  name: "PageCreator",
  components: {
    mdbContainer,
    mdbBtn,
    mdbInput,
    mdbTextarea
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
