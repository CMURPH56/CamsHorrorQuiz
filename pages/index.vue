<template>
  <section class="container">
    <div>
      <h1 class="title">
        Cams Horror Quiz
      </h1>
      <h2 class="subtitle">
        What's Your Monster?
      </h2>
      <div class="links">
        <router-link to="/questions" target="_blank" class="button--green"
          >Get Started</router-link
        >
      </div>
    </div>
  </section>
</template>

<style>
.container {
  background-color: black;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #f1802d;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
