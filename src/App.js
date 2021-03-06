import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f35025").all(count));

  function handleSubmit(e) {
    
    try {
      let num = parseInt(count);
      let colors = new Values(color).all(num);
      console.log(colors.length);
      setList(colors);
    } catch (error) {
      setError(true);
    }

    e.preventDefault();
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <input
            className="drop-down"
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(event) => setCount(event.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
