import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(css.table, css.border)}>
      <thead className={clsx(css.border)}>
        <tr>
          <th className={clsx(css.border)}>Type</th>
          <th className={clsx(css.border)}>Amount</th>
          <th className={clsx(css.border)}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={clsx(css.border, css.type)}>{item.type}</td>
              <td className={clsx(css.border)}>{item.amount}</td>
              <td className={clsx(css.border)}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
