import Clunch from 'clunch';
import bar from '../index';
import image from './test.clunch';

window.clunch = new (Clunch.series('ui-bar', bar))({
    el: document.getElementById('root'),
    data: function () {
        return {
            type: "circle",
            data1: [123, 98, 0, -38, 1, 2, 3, 4, 45, 33, 22, 122],
            data2: [[-123, 43, 1], [98, 21, 3], [10, 5, 4], [-38, 22, 2], [1, 123, 4], [2, 60, 45], [3, 55, 4], [4, 77, 5], [-45, 9, 10], [33, 4, 4], [25, 5, 5], [12, -12, 55]],
            data3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            data4: [-120, -120, -130, -140, -120, -130, -140, -150, -120, -150, -150, -110],
            data5: [120, 120, 130, 140, 120, 130, 140, 150, 120, 150, 150, 110]
        };
    },
    render: image,
    methods: {
        doit(target) {
            console.log(target);
        }
    }
});
