
var newest = new Vue({
    el: '#nemo',
    vuetify: new Vuetify(),
    data: {
        message: '00:00',
        interval: '',
        lock: true,
        toggle: false,
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
            console.log("reset");
            this.lock = true;
            this.toggle = false;
            this.message = '00:00';
        },
        resume(){
            console.log("resume");
            this.lock = true;
            this.toggle = false;
            this.start();
        },
        lap(){
            console.log("lap");
        },
    },
}); 
