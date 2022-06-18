import "./customButton.css";

type Props = {
  title: string;
  handleClick?(): void;
};

function CustomButton({ title, handleClick }: Props) {
  return (
    <button onClick={handleClick} className="trade-button">
      {title}
    </button>
  );
}

export default CustomButton;
