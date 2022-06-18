import "./table.css";
import TableBody from "./TableBody/TableBody";
import { Props as TablePropType } from "./PropTypes";
function Table({ records }: TablePropType) {
  return (
    <table>
      <thead>
        <tr>
          <th className="left">Name</th>
          <th className="center">Actions</th>
          <th className="center">Link</th>
        </tr>
      </thead>
      <TableBody records={records} />
    </table>
  );
}

export default Table;
