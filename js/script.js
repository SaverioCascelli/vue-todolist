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
            inputError: "",
        }
    },
    methods:{
        addTask(string){
            this.inputError = '';
            if (this.findTask(string) ){
            
                this.inputError= "Task gia` presente"
                return 
            }else if  (!this.checkInput(string)){
                this.inputError= "La task deve essere piu` lunga di 5";
                return
            }
            const newObj = {
                text: this.inputString,
                done: false
            }
            this.taskArr.unshift(newObj);
            this.inputString = "";
        },

        removeTask(index){
            index = index.trim;
            this.deleteTaskError = "";
            this.taskArr[index].done ?  this.taskArr.splice(index,1) : this.deleteTaskError ="Can't delete uncompleted  Task"
        },

        findTask(taskText){
            let founded = false
            this.taskArr.forEach(task => {
                if (task.text === taskText) {
                    founded = true
                }
            });
            return founded
        },

        checkInput(string){
            if (string.length > 5){
                return true
            }else return false
        }
    }
}).mount("#app");