const app = Vue.createApp({
    data() {
        return {
          courseGoalA: 'Learn Vue3 and Finsh the course',
          courseGoalB: 'Master in Vue apps!',
          vueLink: 'https://vuejs.org/'
        };
      },
      methods: {
        outputGoal() {
          const randomNumber = Math.random();
          if (randomNumber < 0.5) {
            return this.courseGoalA;
          } else {
            return this.courseGoalB;
          }
        },
        hello(){
            console.log("Hello");
        }

      }
});


function Hello(){
  
}
app.mount("#app");

//vbind