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
        }
    }
}).mount("#app");