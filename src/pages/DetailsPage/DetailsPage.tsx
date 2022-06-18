import "./detailsPage.css";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import FlexContainer from "../../components/FlexContainer/FlexContainer";
import InputContainer from "../../components/InputContainer/InputContainer";
import { useNavigate } from "react-router-dom";
import { FEES } from "../../constants";

function percentage(percent: number, total: string) {
  return ((percent / 100) * Number(total)).toFixed(2);
}

const DetailsPage = (props: any) => {
  const location: any = useLocation();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    amount: "500",
    limitPrice: "200",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }
  }, []);

  const constructRightString = useCallback(
    (percentageValue: number) => {
      return (
        "$" +
        percentage(percentageValue, inputValues.amount) +
        "( " +
        percentageValue +
        " )"
      );
    },
    [inputValues.amount]
  );

  return (
    <div className="detailspage">
      <Breadcrumb title={"/ " + location.state.breadCrumb} />
      <div className="card">
        <InputContainer
          label="Buy Token"
          price={location.state.price}
          value={location.state.symbol}
        />
        <InputContainer
          name={"amount"}
          price={"USD"}
          label="Amount"
          value={inputValues.amount}
          pattern="^[0-9]*$"
          handleChange={handleChange}
        />
        <InputContainer
          name={"limitPrice"}
          label="Limit Price"
          pattern="^[0-9]*$"
          value={inputValues.limitPrice}
          handleChange={handleChange}
        />

        <FlexContainer
          left={FEES.gasFees + " (Estimated)"}
          right={constructRightString(1.1)}
        />
        <FlexContainer
          left={FEES.transactionFees}
          right={constructRightString(1.1)}
        />
        <FlexContainer
          left={FEES.instaFiFees}
          right={constructRightString(0.5)}
        />

        <div className="card-container">
          <FlexContainer
            left={FEES.cardFees}
            right={constructRightString(3.3)}
          />
          <FlexContainer
            left={FEES.achTransferFees}
            right={constructRightString(1.3)}
          />
          <FlexContainer
            left="Deposit Crypto"
            right={"$" + 0 + "( Coming Soon )"}
          />
        </div>
        <button
          onClick={() =>
            navigate(`/${location.state.symbol}/summary`, {
              state: {
                amount: inputValues.amount,
                breadCrumb: location.state.breadCrumb,
                limitPrice: inputValues.limitPrice,
                gasFees: percentage(1.1, inputValues.amount),
                transactionFees: percentage(1.1, inputValues.amount),
                instaFiFees: percentage(0.5, inputValues.amount),
                cardFees: percentage(3.3, inputValues.amount),
                achTransferFees: percentage(1.3, inputValues.amount),
              },
            })
          }
          className="trade-button"
        >
          Trade
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
