import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";

function App() {
  const [categories, setCategoria] = useState(["One Punch", "Drangon Ball"]);

  console.log(categories);

  return (
    <div className="App">
      <h1>GifExpertApp</h1>
      <AddCategory setCategoria = {setCategoria}/>

      <ol>
        {categories.map((cat, index) => {
         return <li key={index}>{cat}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
