const {createApp} = Vue;

createApp({
    data(){
        return{
            
            taskArr:[
                {
                    text: 'css filter',
                    done: true
                },
                {
                    text:'js timing function',
                    done: false
                },
                {
                    text:'html main layout',
                    done: true
                }
            ],
            inputString:"",
            deleteTaskError: '',
        }
    },
    methods:{
        addTask(){
            const newObj = {
                text: this.inputString,
                done: false
            }
            this.taskArr.unshift(newObj);
            this.inputString = "";
        },

        removeTask(index){
            this.deleteTaskError = "";
            this.taskArr[index].done ?  this.taskArr.splice(index,1) : this.deleteTaskError ="Can't delete undone Task"
        }
    }
}).mount("#app");