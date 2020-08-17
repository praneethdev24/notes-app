const tasks = {
    tasks:[
        {
            text: 'Grocery Shopping',
            completed:true
        },
        {
            text: 'Clean Yard',
            completed:false
        },
        {
            text:'Film Course',
            completed:false
        }
    ],

    getTasksToDo(){
        return this.tasks.filter((tasks)=>
             tasks.completed === false
        )
        
    }
}

console.log(tasks.getTasksToDo())