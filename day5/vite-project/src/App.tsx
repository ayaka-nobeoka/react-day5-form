import { useState } from 'react'
import './App.css'

function App() {
const [input,setInput] = useState("");
return (
    <div>
    <h1>Todo App Practice</h1>
    <input value={input}></input>
    <button>追加</button>

      <ul>
        <li>reactの勉強<button>削除</button></li>
      </ul>
    </div>
  )
}

export default App
