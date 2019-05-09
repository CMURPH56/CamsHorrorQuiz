<template>
  <section class="container">
    <div>
      <h1>
        Questions
      </h1>
      <ul>
        <li v-for="question in HorrorQuestions" :key="question.Question">
          {{ question.Question }}
          <div v-for="answer in question.answers" :key="answer.Answer">
            {{ answer.Answer }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      HorrorQuestions: [],
      writeSuccessful: false
    }
  },
  created() {
    fireDb
      .collection('Questions')
      .get()
      .then(querySnapshot => {
        this.loading = false
        querySnapshot.forEach(doc => {
          const data = {
            Number: doc.data().Number,
            Question: doc.data().Question,
            answers: doc.data().answers
          }
          this.HorrorQuestions.push(data)
        })
      })
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
