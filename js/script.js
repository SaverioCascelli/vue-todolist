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
            ]
        }
    }
}).mount("#app");