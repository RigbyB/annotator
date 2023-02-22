import './App.css';
import { useState } from "react";
import Annotator from "./components/Annotator";
import Rectangle from "./types/rectangle";
import BoxContext from "./contexts/box-context";

const App = () => {
  const [boxes, setBoxes] = useState<Rectangle[]>([]);

  return (
    <div className="App">
      <BoxContext.Provider value={{ boxes, setBoxes }}>
        <Annotator src="test2.jpg"></Annotator>
      </BoxContext.Provider>
    </div>
  );
};

export default App;;
