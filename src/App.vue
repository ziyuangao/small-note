<template>
  <div id="app" class="min1200">
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return {
      model:[]
    }
  },
  mounted(){
  }
}
</script>

<style>
.min1200{
  min-width: 1200px;
}
</style>