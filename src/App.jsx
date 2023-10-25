// src image this way
import reactImg from "./assets/react-core-concepts.png";
import SelectButton from "./Components/Button/SelectButton";
import { EXAMPLES } from "./Components/data/data";
import { useState } from "react";
import Examples from "./Components/Examples";

function App() {
  const [example, setExample] = useState("");
  const handleSelect = (selector) => {
    setExample(selector);
  };

  return (
    <div>
      <header>
        {/* Don't src image this way */}
        <img src={reactImg} alt="Stylized atom" />
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <SelectButton onSelect={() => handleSelect("components")}>
          Chick
        </SelectButton>
        {!example ? (
          <p>Select a topic.</p>
        ) : (
          <Examples {...EXAMPLES[example]} />
        )}
      </main>
    </div>
  );
}

export default App;
