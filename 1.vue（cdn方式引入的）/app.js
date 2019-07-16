// 实例化vue对象

new Vue({
    // el:需要挂载的元素，是html中的根容器元素
    el: '#vue-app',
    // data:用于数据存储
    data: {
        name: 'john',
        job: 'java开发',
        age: 20,
        Name: '',
        Age: '',
        x: 0,
        y: 0,
        website: 'https:www.baidu.com',
        websiteTag: '<a href="http://www.thenewstep">the new step</a>',
        a: 0,
        b: 0,
        changeColorr: false,
        changeLength: false,
        success: false,
        error: false,
        characters: ["张幼仪", "张兆和", "蒋碧薇"],
        users: [{
                name: 'Henry',
                age: 24
            },
            {
                name: 'Tom',
                age: 25
            },
            {
                name: 'Jerry',
                age: 21
            }

        ]
    },
    // methods：用于存储各种方法
    methods: {
        // prams接收实参
        say: function (prams) {
            return this.name + ' ' + 'pretty' + ' ' + prams + '!';
        },
        // ageAdd: function (up) {
        //     this.age += up
        // },
        test: function (e) {
            console.log(e)
        },
        ageSub: function (down) {
            this.age -= down
        },
        updateXY: function (e) {
            // 在js的鼠标事件对象event
            //    console.log(e)
            this.x = e.x,
                this.y = e.y
        },
        stopMoving: function (event) {
            // js阻止冒泡事件
            // console.log(event)
            event.stopPropagation();
        },
        alert: function () {
            alert('hello world')
        },
        logName: function () {
            // console.log(this.Name)
            // this.Name = this.$refs.lgName.value
        },
        logAge: function () {
            // console.log('你正在输入年龄')
            // this.Age = this.$refs.lgAge.value
        },
        // addToA: function () {
        //     console.log("lll")
        //     return this.a +this.age;
        // },
        // addToB: function () {
        //     console.log("222")
        //     return this.b + this.age
        // }
    },
    computed: {
        addToA: function () {
            console.log("lll")
            return this.a + this.age;
        },
        addToB: function () {
            console.log("222")
            return this.b + this.age
        },
        compareClass: function () {
            return {
                changeColor: this.changeColorr,
                changeLength: this.changeLength
            }
        }
    }
});