import "./App.css";
import Layout from "./Layout";
import React, { useState } from "react";

import Values from "values.js";
import SingleColor from "./components/SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#A5BECC").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      setList(null);
    }
  };
  return (
    <React.Fragment>
      <Layout>
        {/* Form Section contains input and submit button  */}
        <section className="form">
          <form onSubmit={handleSubmit} className="grow flex justify-center">
            <input
              className={`p-4 w-3/5 focus:outline-none focus:shadow-lg ${
                error ? "border-2 border-red-500 " : "border-0"
              }`}
              placeholder="Enter your color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />

            <button type="submit " className="bg-blue-400 p-2 text-white">
              Submit
            </button>
          </form>
        </section>
        {/* List all Colors List  */}
        <section className="color-list mt-8 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {list?.map((color, idx) => {
            const hexValue = color.hexString();
            return (
              <SingleColor
                key={idx}
                {...color}
                index={idx}
                hexValue={hexValue}
              />
            );
          })}
        </section>
      </Layout>
    </React.Fragment>
  );
}

export default App;
