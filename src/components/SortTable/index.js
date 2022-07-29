import {nanoid} from 'nanoid';
import PropTypes from 'prop-types'

export default function SortTable(props) {
  console.log('SortTable', props);

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map(item => (
            <tr key={nanoid()}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SortTable.propTypes = {
  date: PropTypes.number,
  amount: PropTypes.number
}
