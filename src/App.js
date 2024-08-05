import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";

function App() {
  const [categories, setCategories] = useState([]);

  const onNewCategory = (newCategory) => {
    const setNewCategories = newCategory.toUpperCase()
    if (categories.includes(setNewCategories)) return;
    setCategories([setNewCategories, ...categories]);
  }

  return (
    <div className="App">
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onNewCategory} />

      <ol>
        {categories.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
