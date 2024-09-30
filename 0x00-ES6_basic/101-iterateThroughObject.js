export default function iterateThroughObject(reportWithIterator) {
  const employee = [];

  for (const employee of reportWithIterator) {
    employee.push(employee);
  }

  return employee.join(' | ');
}
