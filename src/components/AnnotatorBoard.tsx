import { useState } from "react";
import './AnnotatorBoard.css';
import AnnotatorBox, { Box } from "./AnnotatorBox";

interface Props {
  src: string;
}

const getBoxElements = (boxes: Box[]) => {
  return <>
    {boxes.map((box, index) => {
      return <AnnotatorBox key={index} info={box}></AnnotatorBox>;
    })}
  </>;
};

const AnnotatorBoard = (props: Props) => {
  // Testing information
  const [boxes, _] = useState<Box[]>([{
    x: 10,
    y: 30,
    w: 200,
    h: 50
  }]);

  return (
    <div className="AnnotatorBoard">
      {getBoxElements(boxes)}

      <img src={props.src} alt="Working image" />
    </div>
  );
};

export default AnnotatorBoard;
