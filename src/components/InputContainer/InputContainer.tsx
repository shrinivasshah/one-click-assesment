import React from "react";
import "./inputcontainer.css";
type Props = {
  name?: string;
  label: string;
  price?: number | string;
  value: number | string;
  pattern?: string;
  handleChange?(e: React.ChangeEvent<HTMLInputElement>): void;
};

function InputContainer({
  name,
  label,
  price,
  value,
  pattern,
  handleChange,
}: Props) {
  return (
    <div className="input-container">
      <p className="label">{label}</p>
      <div className="input-field-holder">
        {pattern ? <p className="dollar">$</p> : null}
        <input
          type="text"
          name={name}
          pattern={pattern}
          value={value}
          onChange={handleChange}
        />
        {price ? (
          <p className="input-price">
            {typeof price === "number" ? "$" + price : price}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default React.memo(InputContainer);
