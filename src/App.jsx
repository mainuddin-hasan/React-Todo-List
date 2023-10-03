import { useState } from "react"
import generateRandomId from "./Utilities/generateRandomId";

function App() {

  const [todos, setTodos] = useState([]);
  const [titleInputValue, setInputValue] = useState("");

  return (

    <div className="max-w-md mx-auto my-20 bg-blue-50 rounded-lg p-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
        <input
          required
          className="border border-gray-300 rounded-md w-full h-10 px-3"
          placeholder="Enter a input"

          value={titleInputValue}
          onChange={function (e) {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={function () {
            const newArr = [...todos,
            { 
              id: generateRandomId(), 
              title: titleInputValue, 
              status:"incomplete", 
            }];
            setTodos(newArr);
            setInputValue("");
          }}
          className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-white"
        >Submit</button>
      </div>
      <div className="mt-6 space-y-4">
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-between">
           <div className="flex gap-3">
           <input 
            type="checkbox" 
            onChange={function(e) {
                setTodos(
                  todos.map((el) => {
                  if(el.id === todo.id){
                    return{
                      ...el,
                      status: e.target.checked ? "complete" : "incomplete",
                    };
                  }
                  return el;
                })
              );
            }} 
            />
            <p className={todo.status === "complete" ? "line-through" : ""}>{todo.title}</p>
           </div>
           
           <div>
             <button onClick={function(){
              setTodos(todos.filter((el) => el.id !==todo.id));
             }} className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-md text-xs">Delete</button>
           </div>

          </div>
        ))}
      </div>
      {todos.length > 0 && (
        <div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-md w-full mt-8" onClick={function() {
          setTodos([]);
        }}>Delete All</button>
      </div>
      )}
    </div>
  )
}

export default App
