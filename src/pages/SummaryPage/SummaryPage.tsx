import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CustomButton from "../../components/CustomButton/CustomButton";
import FlexContainer from "../../components/FlexContainer/FlexContainer";
import { FEES } from "../../constants";
import "./summaryPage.css";

type Props = {};

const SummaryPage = (props: Props) => {
  const location: any = useLocation();
  return (
    <div className="summary-page">
      <Breadcrumb title={`/ ${location.state.breadCrumb} / Summary`} />
      <div className="summary-card">
        <hr />
        <FlexContainer left={FEES.gasFees} right={location.state.amount} />
        <hr />
        <FlexContainer
          left={FEES.transactionFees}
          right={location.state.transactionFees}
        />
        <hr />
        <FlexContainer
          left={FEES.instaFiFees}
          right={location.state.instaFiFees}
        />
        <hr />
        <FlexContainer left={FEES.cardFees} right={location.state.cardFees} />
        <hr />
        <FlexContainer
          left={FEES.achTransferFees}
          right={location.state.achTransferFees}
        />
        <hr />
        <Link className="summary-button-link" to="/">
          <CustomButton title="Go Home" />
        </Link>
      </div>
    </div>
  );
};

export default SummaryPage;
