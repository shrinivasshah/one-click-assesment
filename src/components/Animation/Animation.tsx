import "./animation.css";
import Lottie from "lottie-react";

import Loader from "../../assets/lottie/loader.json";

import "./Animation.css";

export default function LoaderComponent() {
  return (
    <div className="empty-state">
      <Lottie className="loader" animationData={Loader} />
    </div>
  );
}
