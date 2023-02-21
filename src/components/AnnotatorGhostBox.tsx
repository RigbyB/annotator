import './AnnotatorGhostBox.css';
import VectorPair from "../types/vectorpair";
import Rectangle from "../types/rectangle";

interface Props {
  coordinates: VectorPair;
  color?: string;
}

const convertCoordsToRect = (coordinates: VectorPair): Rectangle => {
  const x = Math.min(coordinates.a.x, coordinates.b.x);
  const y = Math.min(coordinates.a.y, coordinates.b.y);
  const w = Math.max(coordinates.a.x, coordinates.b.x) - x;
  const h = Math.max(coordinates.a.y, coordinates.b.y) - y;
  return { x, y, w, h };
};

const getGhostBoxElement = (coordinates: VectorPair, color?: string) => {
  const rect = convertCoordsToRect(coordinates);

  return <div className="AnnotatorGhostBox" style={{
    borderColor: color,
    left: `${rect.x}px`,
    top: `${rect.y}px`,
    width: `${rect.w}px`,
    height: `${rect.h}px`,
  }}></div>;
};

const AnnotatorGhostBox = (props: Props) => {
  return getGhostBoxElement(props.coordinates, props.color);
};

export default AnnotatorGhostBox;