import React from "react";
import "./App.css";
import Table from "./Components/Table/Table";
import Form from "./Components/Form/Form";

import { useState } from "react";

const App = () => {
  const [items, setItems] = useState<Array<Object>>([
    { description: "Swim Short", amount: 5, category: "Groceries" },
    { description: "BK", amount: 2.24, category: "Groceries" },
    { description: "John Wick 4", amount: 14.97, category: "Entertainment" },
    { description: "Water Bill", amount: 80.23, category: "Utilities" },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const remove = (itemsArr: {}[]) => {
    const newList = itemsArr.filter(
      (item, i) => item != itemsArr[selectedIndex]
    );
    setItems(newList);
  };

  return (
    <div className="app-container">
      <Form />
      <Table
        items={items}
        onClick={(e: Event) => {
          console.log(e.target);
          console.log(e.currentTarget);
          console.log();
        }}
      />
    </div>
  );
};

export default App;
