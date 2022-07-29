export function transformedData(list, type) {
  const index = { month: 1, year: 3 }
  return list.map(e => {
    const { date, amount } = e;
    const prop = new Date(date).toDateString().split(' ')[index[type]];
    return { [type]: prop, amount }
  })
}

export function sortByDescend(list) {
  return list.sort((a, b) => +new Date(a.date) - +new Date(b.date));
}

export function withValidator(Component, operation, type) {
  return function (props) {
    const data = operation(props.list, type)
    return <Component {...props} list={data} />
  }
}