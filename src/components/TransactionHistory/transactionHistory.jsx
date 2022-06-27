import PropTypes from 'prop-types';
import {
  Table,
  TheadTh,
  TbodyTd,
  TbodyTr,
  Thead,
} from './transactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <tr>
          <TheadTh>Type</TheadTh>
          <TheadTh>Amount</TheadTh>
          <TheadTh>Currency</TheadTh>
        </tr>
      </Thead>
      <tbody>
        {items.map(transaction => {
          return (
            <TbodyTr key={transaction.id}>
              <TbodyTd>{transaction.type}</TbodyTd>
              <TbodyTd>{transaction.amount}</TbodyTd>
              <TbodyTd>{transaction.currency}</TbodyTd>
            </TbodyTr>
          );
        })}
      </tbody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
