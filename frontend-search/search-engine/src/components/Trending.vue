<template>
  <div class="col-lg-12">
    <div class="panel panel-default">
      <div class="panel-heading"><h3>Trending</h3></div>
      <div class="panel-body">
        <table class="table table-condensed" style="border-collapse: collapse">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            <tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
              <td>
                <button class="btn btn-default btn-xs"><i class="fa fa-star" aria-hidden="true"></i></button>
              </td>
              <td>Name</td>
              <td>Description</td>
              <td>Link</td>
            </tr>
            <tr>
              <td colspan="6" class="hiddenRow"><div id="demo2" class="accordian-body collapse">Demo1</div></td>
            </tr>
            <tr data-toggle="collapse" data-target="#demo2" class="accordion-toggle">
              <td>
                <button class="btn btn-default btn-xs"><i class="fa fa-star" aria-hidden="true"></i> </button>
              </td>
              <td>Name</td>
              <td>Description</td>
              <td>Link</td>
            </tr>
            <tr>
              <td colspan="6" class="hiddenRow"><div id="demo2" class="accordian-body collapse">Demo2</div></td>
            </tr>
            <tr data-toggle="collapse" data-target="#demo3" class="accordion-toggle">
              <td>
                <button class="btn btn-default btn-xs"><i class="fa fa-star" aria-hidden="true"></i></button>
              </td>
              <td>Name</td>
              <td>Description</td>
              <td>Link</td>
            </tr>
            <tr>
              <td colspan="6" class="hiddenRow"><div id="demo3" class="accordian-body collapse">Demo3</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "Trending",
  components: {},
};
</script>

<style></style>
