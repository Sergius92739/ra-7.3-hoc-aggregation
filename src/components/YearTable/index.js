import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function YearTable(props) {
  console.log('YearTable', props);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map(item => (
            <tr key={nanoid()}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

YearTable.propTypes = {
  year: PropTypes.number,
  amount: PropTypes.number
}
