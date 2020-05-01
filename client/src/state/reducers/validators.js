import xDate from 'xdate';

export const isValid = {
  First_name: (x) => !!x,
  MI: () => true,
  Last_name: (x) => !!x,
  DOB: (x) => {
    return xDate(x) < xDate();
  },
  Hire_date: (x) => {
    return xDate(x) < xDate();
  },
  Status: (x) => !!x
}