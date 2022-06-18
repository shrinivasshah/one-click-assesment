import "../table.css";
import React from "react";
import { Props as TablePropType } from "../PropTypes";
import { Record } from "../../../types";
import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { useNavigate } from "react-router-dom";

const TableBody = ({ records }: TablePropType) => {
  const navigate = useNavigate();

  return (
    <tbody>
      {records.map((record: Record) => (
        <tr key={record.address}>
          <td className="first-column left">
            <Icon imageUri={record.iconUrl} symbol={record.name} />
            &nbsp;&nbsp;&nbsp;
            {record.symbol}
          </td>
          <td
            onClick={() =>
              navigate("/" + record.address, {
                state: {
                  breadCrumb: record.symbol,
                  symbol: `${record.symbol}(${record.name})`,
                  address: record.address,
                  price: (Math.random() * 100).toFixed(2),
                },
              })
            }
            className="center trade-link"
          >
            Trade
          </td>
          <td className="center links-container">
            <a className="cmc" href={record.cmcUrl}>
              Coin Market Cap
            </a>
            &nbsp;&nbsp;&nbsp;
            <a className="cg" href={record.coinGeckoUrl}>
              Coin Geco
            </a>
            &nbsp;&nbsp;&nbsp;
            <a className="dt" href={record.dexToolsUrl}>
              DexTool
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
