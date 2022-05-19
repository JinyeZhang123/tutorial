const app = Vue.createApp({
    data(){
        return{
            showbooks: true,
            title:'the final empire',
            author: 'Michael',
            age:45,
            bookstatu:'hide book',
            x:0,
            y:0,
            lastname:"",
            firstname:"",
            message:"",
            url:"https://www.youtube.com/watch?v=CYPZBK8zUik&t=1096s",
            books: [
                {title: 'name of the wind',author:'patrick rothfuss', img:'wind.jpg', isFav: true},
                {title: 'the way of kings',author:'brandon sanderson', img:'empire.jpg', isFav: false},
                {title: 'the final empire',author:'brandon sanderson', img:'kings.jpg', isFav: true}
            ]

        }
    },
    computed:{
        fullname: function () {
    
            return this.firstname+this.lastname
          },
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
          
    },
    methods:{
        changetitle(){
            this.title="other title"
        },
        hidebooks(){
            this.showbooks= !this.showbooks
            if(this.showbooks==false){
                this.bookstatu='show book'
            }
            else{
                this.bookstatu='hide book'
            }
        },
        handlemouseover(e,num){
            console.log("mouse is over")
            console.log(e.type)
            console.log(num)
        },
        handlemouseleave(){
            console.log("mouse is leaving")
        },
        handledoubleclick(){
            console.log("mouse is double clicking")
        },
        handlemousemove(e){
            console.log("mouse is moving")
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }


})

app.mount('#app')
//