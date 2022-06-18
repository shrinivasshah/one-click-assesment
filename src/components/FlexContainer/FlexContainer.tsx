import "./flexContainer.css";

type Props = {
  left: string;
  right: string;
};

const FlexContainer = ({ left, right }: Props) => {
  return (
    <div className="flex-container">
      <p className="left-child">{left}</p>
      <p className="right-child">{right}</p>
    </div>
  );
};

export default FlexContainer;
