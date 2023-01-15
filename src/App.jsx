import './App.css'
import React, { useState } from 'react'
import Menu from "./Menu";
import items from "./data";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      {/* Bu Sayfa App.jsx */}
      <section className='holiday section'>
        <div className="title">
          <h2>Swimming Places in Cukurova</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
