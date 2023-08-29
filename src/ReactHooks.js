import React from "react";
import { useState } from "react";

const ReactHooks = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Guadalupe Wyman",
      age: 45,
      dob: "1978-12-11T07:36:07.343Z",
      salary: 294337,
      designation: "Developer",
      img: "https://loremflickr.com/640/480/people?lock=478622523588608",
      dept: "Future Marketing",
    },
    {
      id: 2,
      fullName: "Joe Grady-Schinner DVM",
      age: 68,
      dob: "1955-04-07T15:27:42.426Z",
      salary: 257218,
      designation: "Planner",
      img: "https://loremflickr.com/640/480/people?lock=3229576333361152",
      dept: "Global Intranet",
    },
    {
      id: 3,
      fullName: "Darlene Wolff",
      age: 59,
      dob: "1964-01-12T10:00:20.381Z",
      salary: 44762,
      designation: "Developer",
      img: "https://loremflickr.com/640/480/people?lock=4257423311241216",
      dept: "Internal Research",
    },
    {
      id: 4,
      fullName: "Mr. Ronnie Wisozk",
      age: 69,
      dob: "1954-08-10T19:15:06.974Z",
      salary: 242319,
      designation: "Chief Analyst",
      img: "https://loremflickr.com/640/480/people?lock=1599940620976128",
      dept: "Program Analysis",
    },
    {
      id: 5,
      fullName: "Pedro Bosco",
      age: 39,
      dob: "1984-02-23T17:10:50.537Z",
      salary: 97494,
      designation: "Director",
      img: "https://loremflickr.com/640/480/people?lock=5618653785489408",
      dept: "Forward Creative",
    },
  ]);

  const [car, setCar] = useState({
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  });

  const updateSecondIndex = () => {
    const newEmployee = {
      id: 11,
      fullName: "New Employee",
      age: 99,
      dob: "1970-10-04T17:30:05.153Z",
      salary: 999999,
      designation: "New Employee",
      img: "https://loremflickr.com/640/480/people?lock=6645985090469888",
      dept: "New Department",
    };

    const newEmployeesList = [...employees];
    newEmployeesList[2] = newEmployee;

    setEmployees(newEmployeesList);
  };

  const updateTwoPropertyValues = () => {
    setCar({
      ...car,
      color: "red",
      type: "sedan",
    });
  };

  return (
    <div>
      <h2>Create an Array of Objects and update its second index</h2>
      <div style={{ backgroundColor: "lightgrey" }}>
        {employees.map((employee, index) => {
          return (
            <div key={index} style={{ border: "dotted 1px black" }}>
              <p>{employee.fullName}</p>
              <p>{employee.age}</p>
              <p>{employee.designation}</p>
              <p>{employee.dept}</p>
            </div>
          );
        })}
        <button onClick={updateSecondIndex}>Update 2nd Index</button>
      </div>
      <h2>Create an object, update its 2 property values</h2>
      <div style={{ backgroundColor: "lightgrey" }}>
        <div style={{ border: "dotted 1px black" }}>
          <p>Car Colour: {car.color}</p>
          <p>Car Type: {car.type}</p>
          <p>Car Capacity: {car.capacity}</p>
          <button onClick={updateTwoPropertyValues}>
            Update 2 property values
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReactHooks;
