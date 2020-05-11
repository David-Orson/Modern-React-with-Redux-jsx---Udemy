// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
const App = () => {
  const buttonText = "Click me";
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter name:
      </label>
      <input id='name' type='text' />
      <button style={style}>{buttonText}</button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
