<template>
  <v-app>
    <v-content>
        <v-container fill-height fluid style="min-width:500px; padding-top: 0px" >
          <v-col  >

            <v-text-field 
              class="centered-input" 
              v-model='message' 
              label="Solo" 
              solo 
              readonly>
            </v-text-field>
            
            
            <v-row v-show="lock" style="padding-top: 2.5%;">
              <v-spacer></v-spacer>
              <v-btn class="start-btn" width="200" height="70" v-on:click="start" text color="indigo">[ Start ]</v-btn>
              <v-spacer></v-spacer>
            </v-row>
            
            <v-row v-show="!toggle && !lock" style="padding-top: 2.5%;">
              <btton  
                :colour1 = "'red'"  
                :funct1 = 'stop'  
                :colour2 = "'primary'"  
                :funct2 = 'lap'
                > 
                <template slot="first-button"> [ Stop ] </template>
                <template slot="second-button"> [ Lap ] </template>
              </btton>
            </v-row>

            <v-row v-show="toggle && !lock" style="padding-top: 2.5%;">
              <btton  
                :colour1 = "'green'"  
                :funct1 = 'resume'  
                :colour2 = "'indigo'"  
                :funct2 = 'reset'
                > 
                <template slot="first-button"> [ Resume ] </template>
                <template slot="second-button"> [ Reset ] </template>
              </btton>
            </v-row>


          </v-col>

        </v-container >
        </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import btton from './components/btton';

export default {
  name: 'App',
  
    data: () => ({
      message: '00:00',
      interval: '',
      lock: true,
      toggle: false,
      //
    }),

    components:{
      btton
    },

    methods: {
        start() {
            if(this.lock){
                let self = this;
                let some = this.message.split(':');
                let min1 = parseInt(some[0]);
                let seg1 = parseInt(some[1]);
                
                this.interval = setInterval(function () {
                    seg1 += 1;
                    if (seg1 == 60) {
                        min1 += 1;
                        seg1 = 0;
                    }
                
                    let seg = seg1.toString().padStart(2, '0');
                    let min = min1.toString().padStart(2, '0');
                
                    self.message = [min, seg].join(':');
                
                }, 1000);  
            }
            this.lock = false;

        },
        stop() {
            clearInterval(this.interval);
            this.toggle = true;
        },
        reset(){
            // console.log("reset");
            this.lock = true;
            this.toggle = false;
            this.message = '00:00';
        },
        resume(){
            // console.log("resume");
            this.lock = true;
            this.toggle = false;
            this.start();
        },
        lap(){
            // console.log("lap");
        },
    },
};
</script>



  <style>
    .v-input input {
      max-height: 200px!important;;
      /* display: flex !important;
      align-items: center !important */
    }

    .centered-input input {
      text-align: center;
      font-size: 11em;
      height: 200px;
    }

    .v-btn {
      font-size: 1.5rem !important;
    }

    .start-btn {
      font-size: 2.5rem !important;
    }

  </style>
