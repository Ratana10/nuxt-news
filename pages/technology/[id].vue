<script setup>
const route = useRoute();
console.log(route.params.id);

</script>


<template>
   <div class="container">
      <div class="row">
         <h1 class="fw-bold text-center">Technology</h1>
      </div>
      <div class="row">
         <img src="/technology/t0.jpg" alt="" style="height: 600px" />
      </div>
      <div class="row p-3"></div>
   </div>
</template>