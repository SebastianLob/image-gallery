<template>
  <v-app-bar fixed collapse-on-scroll color="white" dense>
      <v-toolbar-title class='font-weight-black headline ml-0'>
        <v-btn
          href='https://www.linkedin.com/in/sebastian-lob/'
          target='_blank'
          text
        >
            <span class='mr-2'>Sebastian Lob</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer/>
        <v-btn
          color="secondary"
          dark
          href='https://github.com/SebastianLob/image-gallery'
          target='_blank'
          class="pa-1"
        >
          Source
        </v-btn>
  </v-app-bar>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'App-bar'
  }
</script>
