<template>
  <div id="page-1">
    This page has Vuex store counters.

    <div>
      <button @click="incrementCounter">Increment</button>

      Store counter: {{ storeCounter }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Page1',
  computed: {
    ...mapState(['storeCounter']),
  },
  methods: {
    ...mapMutations(['incrementCounter']),
  },
}
</script>

<style lang="scss"></style>
