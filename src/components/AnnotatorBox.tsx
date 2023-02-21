import './AnnotatorBox.css';

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Props {
  info: Box;
}

const AnnotatorBox = (props: Props) => {
  return (
    <div className="AnnotatorBox" style={{
      left: `${props.info.x}px`,
      top: `${props.info.y}px`,
      width: `${props.info.w}px`,
      height: `${props.info.h}px`,
    }}></div>
  );
};

export default AnnotatorBox;
export type { Box };