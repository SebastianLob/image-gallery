<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row justify="center" class='text-center'>
          <h1 id='redirecting'>Page not found. Redirecting to home...</h1>
          <h1>{{time}}</h1>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
  export default {
    data: () => ({
      time: 3
    }),
    created(): void {
      setInterval(
        () => (this.time--),
        1000
      );
      setTimeout(
        () => (this.$router.push('/home')),
        3000
      );
    }
  }
</script>