import { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";


function App() {

  const [category, setCategory] = useState('general')

  return (
    <>
        <Header setCategory={setCategory}/>
        <Content category={category} set={setCategory} />
    </>
  );
}

export default App;

