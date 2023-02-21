import './AnnotatorBoard.css';
import { useState } from "react";
import VectorPair from "../types/vectorpair";
import Vector2D from "../types/vector2d";
import AnnotatorGhostBox from "./AnnotatorGhostBox";

interface Props {
  src: string;
}

const getBoxElements = (coordinates: VectorPair[]) => {
  return <>
    {coordinates.map((coords, index) => {
      return <AnnotatorGhostBox key={index} coordinates={coords} color="red"></AnnotatorGhostBox>;
    })}
  </>;
};

const AnnotatorBoard = (props: Props) => {
  const [boxes, setBoxes] = useState<VectorPair[]>([]);
  const [mousePos, setMousePos] = useState<Vector2D>({ x: 0, y: 0 });
  const [drawingStartPos, setDrawingStartPos] = useState<Vector2D>({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);

  const getDrawingBoxCoords = (): VectorPair => {
    return {
      a: drawingStartPos,
      b: mousePos
    };
  };

  const onClick = () => {
    const newIsDrawing = !isDrawing;

    if (newIsDrawing) {
      setDrawingStartPos(mousePos);
    } else {
      setBoxes([
        ...boxes, getDrawingBoxCoords()
      ]);
    }

    setIsDrawing(newIsDrawing);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const element = event.target as HTMLImageElement;
    const bounds = element.getBoundingClientRect();

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    setMousePos({ x, y });
  };

  return (
    <div className="AnnotatorBoard">
      {isDrawing && <AnnotatorGhostBox coordinates={getDrawingBoxCoords()} color="blue"></AnnotatorGhostBox>}

      {getBoxElements(boxes)}

      <img src={props.src} alt="Working image" onClick={onClick} onMouseMove={onMouseMove} />
    </div>
  );
};

export default AnnotatorBoard;
