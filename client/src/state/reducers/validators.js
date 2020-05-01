import xDate from 'xdate';
window.xDate = xDate;

export const isValid = {
  First_name: (x) => !!x,
  MI: () => true,
  Last_name: (x) => !!x,
  DOB: (x) => xDate(x) < xDate(),
  Hire_date: (x) => xDate(x) < xDate(),
  Status: (x) => !!x
};

export const errs = {
  First_name: 'First name required',
  Last_name: 'Last name required',
  MI: null,
  DOB: 'Enter a valid date (before today)',
  Hire_date: 'Enter a valid date (before today)',
  Status: 'Select status'
};