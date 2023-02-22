import './AnnotatorGhostBox.css';
import Rectangle from "../types/rectangle";

interface Props {
  rect: Rectangle;
  color?: string;
}

const getGhostBoxElement = (rect: Rectangle, color?: string) => {
  return <div className="AnnotatorGhostBox" style={{
    borderColor: color,
    left: `${rect.x}px`,
    top: `${rect.y}px`,
    width: `${rect.w}px`,
    height: `${rect.h}px`,
  }}></div>;
};

const AnnotatorGhostBox = (props: Props) => {
  return getGhostBoxElement(props.rect, props.color);
};

export default AnnotatorGhostBox;