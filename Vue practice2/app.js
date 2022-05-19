const app = Vue.createApp({
    data(){
        return{
            url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&t=1097s',
            showBooks: true,
            books:[
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'wind.jpg',isLike:true},
                {title: 'the way of kings', author: 'brandon sanderson',img: 'kings.jpg',isLike:false },
                {title: 'the final empire', author: 'brandon sanderson', img:'empire.jpg',isLike:true}
            ]
        }
    },
    
    methods: {
        ShowBooks(){
            this.showBooks=!this.showBooks
        },

        ClickOnBook(book){
            book.isLike=!book.isLike
            
        }
    },
    computed:{
        filterLike(){
            return this.books.filter(book=>book.isLike)
        }
    },
})
app.mount('#app')