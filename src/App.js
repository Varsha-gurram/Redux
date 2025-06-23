import React, { useState } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook, increment, decrement,deleteBook } from "./Redux/Action";

function App() {
  const dispatch = useDispatch();
  const [numInput, setNumInput] = useState(1);
  const [bookInput, setBookInput] = useState("");
  const books = useSelector((state) => state.books);
  const bookList = Object.entries(books);
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <center>
        <h2>Counter:{counter}</h2>
      </center>
      <center>
        <input
          type="number"
          value={numInput}
          onChange={(e) => setNumInput(Number(e.target.value))}
        ></input>
        <center></center>

        <button onClick={() => dispatch(increment(numInput))}>Increment</button>
        <br />
        <button onClick={() => dispatch(decrement(numInput))}>Decrement</button>
      </center>
      <input
        type="text"
        value={bookInput}
        placeholder="Book name"
        onChange={(e) => setBookInput(e.target.value)}
      ></input>
      <button
        onClick={() => {
          if (bookInput.trim()) {
            dispatch(addBook(bookInput.trim()));
            setBookInput("");
          }
        }}
      >
        Add Book
      </button>
      <ul>
        {bookList.map(([title, count]) => (
            <li key={title}>
                <div>{title}   :  {count}   </div>
              
              <div style={{display:"flex",gap:2}}>
                <button onClick={() => dispatch(addBook(title.trim()))}>+</button>
              <button onClick={() => dispatch(removeBook(title))}>-</button>
              <button onClick={()=>dispatch(deleteBook(bookInput.trim()))}>Delete Book</button>
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
