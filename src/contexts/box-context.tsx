import { createContext } from "react";
import Rectangle from "../types/rectangle";

const BoxContext = createContext<{
  boxes: Rectangle[],
  setBoxes: (boxes: Rectangle[]) => any;
}>({
  boxes: [],
  setBoxes: () => { }
});

export default BoxContext;