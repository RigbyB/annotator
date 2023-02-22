import './AnnotatorBoard.css';
import { useContext, useState } from "react";
import Vector2D from "../types/vector2d";
import Rectangle from "../types/rectangle";
import AnnotatorGhostBox from "./AnnotatorGhostBox";
import BoxContext from "../contexts/box-context";

interface Props {
  src: string;
}

const getBoxElements = (rects: Rectangle[]) => {
  return <>
    {rects.map((rect, index) => {
      return <AnnotatorGhostBox key={index} rect={rect} color="red"></AnnotatorGhostBox>;
    })}
  </>;
};

const AnnotatorBoard = (props: Props) => {
  const [mousePos, setMousePos] = useState<Vector2D>({ x: 0, y: 0 });
  const [drawingStartPos, setDrawingStartPos] = useState<Vector2D>({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);

  const { boxes, setBoxes } = useContext(BoxContext);

  const getDrawingBoxRect = (): Rectangle => {
    const x = Math.min(drawingStartPos.x, mousePos.x);
    const y = Math.min(drawingStartPos.y, mousePos.y);
    const w = Math.abs(drawingStartPos.x - mousePos.x);
    const h = Math.abs(drawingStartPos.y - mousePos.y);
    return { x, y, w, h };
  };

  const onClick = () => {
    const newIsDrawing = !isDrawing;

    if (newIsDrawing)
      setDrawingStartPos(mousePos);
    else
      setBoxes([...boxes, getDrawingBoxRect()]);

    setIsDrawing(newIsDrawing);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const element = event.target as HTMLImageElement;
    const bounds = element.getBoundingClientRect();

    const x = Math.floor(event.clientX - bounds.left);
    const y = Math.floor(event.clientY - bounds.top);

    setMousePos({ x, y });
  };

  return (
    <div className="AnnotatorBoard">
      {isDrawing && <AnnotatorGhostBox rect={getDrawingBoxRect()} color="blue"></AnnotatorGhostBox>}

      {getBoxElements(boxes)}

      <img src={props.src} alt="Working image" draggable={false} onClick={onClick} onMouseMove={onMouseMove} />
    </div>
  );
};

export default AnnotatorBoard;
