import "./breadcrumb.css";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
};

const Breadcrumb = ({ title }: Props) => {
  const navigate = useNavigate();
  return (
    <h1 className="homepage-header">
      <span className="home-page-button" onClick={() => navigate("/")}>
        Trade
      </span>
      {title && <span>{" " + title}</span>}
    </h1>
  );
};

export default Breadcrumb;
