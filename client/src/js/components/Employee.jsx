import React from 'react';


const Employee = (props) => {
  
  return (
    <div className="col-12 no-gutters">
      <div className="col-md-8 ml-auto mr-auto my-accordion mt-3">
        <button className="w-100 btn btn-secondary" type="button" data-toggle="collapse" data-target={`#${props.employee._id}`} aria-expanded="false" aria-controls="collapseExample">
          <span className="h4">{`${props.employee.Last_name}, ${props.employee.First_name} ${props.employee.MI}`}</span>
        </button>
        <div className="collapse border" id={props.employee._id}>
          <div className="col-12 position-absolute text-right ml-auto mt-1">
            <i className="material-icons pointer ml-auto">edit</i>
          </div>
          <div key={props.employee._id} className="col-sm-7 mr-auto ml-auto my-3">

            {
              Object.keys(props.employee).map(dataLabel => {
                let label = dataLabel.split('_').join(' ')
                return (
                  <div key={dataLabel}>{`${label}: ${props.employee[dataLabel]}`}</div>
                )
              })
            }
          </div>
        </div>

      </div>
      <div className="w-100"></div>
    </div>
  )
};

export default Employee;