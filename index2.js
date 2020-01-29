var x;
let lock = true;

var newest = new Vue({
    el: '#nemo',
    vuetify: new Vuetify(),
    data: {
        message: '00:00',
    },
    methods: {
        start: function () {
           if(lock){  check();  }
           lock = false;
        },
        stop: function () {
            clearInterval(x);
            lock = true;
        }
    }
}); 

let some = newest.message.split(':');
let min1 = parseInt(some[0]);
let seg1 = parseInt(some[1]);

function check(){
    x = setInterval(function () {
        seg1 += 1;
        if (seg1 == 60) {
            min1 += 1;
            seg1 = 0;
        }

        let seg = seg1.toString().padStart(2, '0');
        let min = min1.toString().padStart(2, '0');

        newest.message = [min, seg].join(':');

    }, 1000);      
}
