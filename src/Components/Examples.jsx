import Tab from "./Tabs/Tab";
import { useState } from "react";
import SelectButton from "./Button/SelectButton";
import { EXAMPLES } from "./data/data.js";

const Examples = (props) => {
  const [example, setExample] = useState("");
  const handleSelect = (selector) => {
    console.log(selector);
    setExample(selector);
  };

  const buttons = (
    <>
      <SelectButton
        onSelect={() => handleSelect("components")}
        selectedOne={example === "components"}
      >
        Components
      </SelectButton>
    </>
  );

  return (
    <Tab buttons={buttons} buttonContainer="menu">
      {!example ? (
        <p>Select a topic.</p>
      ) : (
        <>
          {" "}
          <h1>{EXAMPLES[example].title}</h1>
          <p>{EXAMPLES[example].description}</p>
        </>
      )}
    </Tab>
  );
};

export default Examples;
