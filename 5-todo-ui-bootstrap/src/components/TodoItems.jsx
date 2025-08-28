import TodoItems from "./TodoItem";

const TodoItems = ()=>{
   const todoItems= [
    { id: 1, TodoText:'Buy Milk', TodoDate: '25-Aug-2025'},
    { id: 2, TodoText:'Go To College', TodoDate: 'Everyday'},
    { id: 2, TodoText:'Exercise', TodoDate: 'Everyday'}
  ]
    return <> {todoItems.map((item)=>
          <TodoItems TodoText={item.TodoText} TodoDate={item.TodoDate}/>
        )}
       
        </>
}

export default TodoItems;