import React from 'react';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import MonthTable from './components/MonthTable';
import { transformedData, sortByDescend, withValidator } from './utils';

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state

const MonthTableHOC = withValidator(MonthTable, transformedData, 'month');
const YearTableHOC = withValidator(YearTable, transformedData, 'year');

export default class App extends React.Component {
  state = {
    list: [],
  };

  async componentDidMount() {
    try {
      const request = await fetch(process.env.REACT_APP_URL);
      if (!request.ok) {
        throw new Error('Oops... Something went wrong...');
      }
      const response = await request.json();
      this.setState((prev) => ({
        list: [...prev.list, ...sortByDescend(response.list)]
      }));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { list } = this.state;
    return (
      <div id="app">
        <MonthTableHOC list={list} />
        <YearTableHOC list={list} />
        <SortTable list={list} />
      </div>
    );
  }
}