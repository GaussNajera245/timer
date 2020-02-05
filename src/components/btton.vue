<template>
<v-row>
        <v-spacer></v-spacer>
              <v-flex  style="min-width: 200px; width: 200px;">
                    <v-btn width="200" height="70" @click="funct1" outlined :color='colour1'>
                        <slot name="first-button"></slot>
                    </v-btn>
              </v-flex>
        <v-spacer></v-spacer>
              <v-flex style="min-width: 200px ; width: 200px;">
                    <v-btn width="200" height="70" @click="funct2" outlined :color='colour2'>
                        <slot name="second-button"></slot>
                    </v-btn>
              </v-flex>
        <v-spacer></v-spacer>

</v-row>
</template>

<script>
export default {
    name: 'btton',
    props: {
        colour1: String,
        funct1:  Function,
        colour2: String,
        funct2:  Function
    }
}
</script>

<style >
    .flex, .child-flex{
        flex: 0 1 auto !important
    }
</style>

// .v-application .primary--text