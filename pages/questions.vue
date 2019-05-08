<template>
  <section class="container">
    <div>
      <h2>
        Test writing feature
      </h2>
      <div>
        <button :disabled="writeSuccessful" @click="writeToFirestore">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      writeSuccessful: false
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection('test').doc('test')
      const document = {
        text: 'this is a test message'
      }
      try {
        await ref.set(document)
      } catch (e) {
        console.error(e)
      }
      this.writeSuccessful = true
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
