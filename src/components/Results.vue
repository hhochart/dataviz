<template>
  <div class="results">
    Page des resultats
  </div>
</template>

<script>
export default {
  name: 'Results',
  mounted () {
    console.log(this.$results)
    if (Object.keys(this.$results).length === 0) {
      this.$router.push({name: 'Slide', params: {id: 1}})
    }
  }
}
</script>
