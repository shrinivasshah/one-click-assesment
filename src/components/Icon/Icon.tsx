import "./icon.css";
type Props = {
  imageUri: string | undefined;
  symbol: string | undefined;
};

function Icon({ imageUri, symbol }: Props) {
  return <img className="icon" src={imageUri} alt={symbol} />;
}

export default Icon;
