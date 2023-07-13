import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
class Table extends React.Component {
  render() {
    const { transactions } = this.props;
    const CamelCaseFirstLetter = word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return (
      <table class="transaction-history">
        <thead>
          <tr>
            <th className="th thead">Type</th>
            <th className="th thead">Amount</th>
            <th className="th thead">Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => (
            <tr className={index % 2 ? 'trBody trPair' : 'trBody trOdd'}>
              <th className="th tbody">
                {CamelCaseFirstLetter(transaction.type)}
              </th>
              <th className="th tbody">{transaction.amount}</th>
              <th className="th tbody">{transaction.currency}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
Table.proptype = {
  transactions: PropTypes.array,
};
export default Table;
