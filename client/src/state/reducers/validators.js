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

export const errors = {
  data: {
    First_name: 'First name required',
    Last_name: 'Last name required',
    MI: null,
    DOB: 'Enter a valid date (before today)',
    Hire_date: 'Enter a valid date (before today)',
    Status: 'Select status'
  }
}