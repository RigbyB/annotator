import './Annotator.css';
import AnnotatorBoard from "./AnnotatorBoard";

interface Props {
  src: string;
}

const Annotator = (props: Props) => {
  return (
    <div className="Annotator">
      <AnnotatorBoard src={props.src}></AnnotatorBoard>
    </div>
  );
};

export default Annotator;
