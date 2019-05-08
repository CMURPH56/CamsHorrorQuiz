<template>
  <section>
    <div>
      <nav class="crumbs">
        <ol>
          <li class="crumb"><a href="bikes">Bikes</a></li>
          <li class="crumb"><a href="bikes/bmx">BMX</a></li>
          <li class="crumb">Jump Bike 3000</li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<style>
nav {
  border-bottom: 1px solid black;
}

.crumbs ol {
  list-style-type: none;
  padding-left: 0;
}

.crumb {
  display: inline-block;
}

.crumb a::after {
  display: inline-block;
  color: #000;
  content: '>';
  font-size: 80%;
  font-weight: bold;
  padding: 0 3px;
}
</style>
