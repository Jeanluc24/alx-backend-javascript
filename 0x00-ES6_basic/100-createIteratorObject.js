export default function createIteratorObject(report) {
  const myResult = [];
  for (const item of Object.values(report.allEmployees)) {
    myResult.push(...item);
  }

  return myResult;
