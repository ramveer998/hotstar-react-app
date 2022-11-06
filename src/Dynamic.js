import React from "react";

export default function Dynamic() {
  let datas = [
    {
      firstName: "Ramveer",
      lastName: "Chauhan",
      age: 23,
      designation: "Software Engineer",
    },
    {
      firstName: "Allex",
      lastName: "Sam",
      age: 20,
      designation: "Trainee Engineer",
    },
    {
      firstName: "Miller",
      lastName: "Park",
      age: 45,
      designation: "Jr. Software Engineer",
    },
    {
      firstName: "Ford",
      lastName: "Toyo",
      age: 30,
      designation: "Sr. Software Engineer",
    },
    {
      firstName: "King",
      lastName: "Mexo",
      age: 18,
      designation: "Associate Engineer",
    },
  ];
  return (
    <div className="dynamic">
      {datas.map((value) => (
        <div className="parent">
          <h1>
            {value.firstName} {value.lastName}
          </h1>
          <p>{value.age}</p>
          <p>{value.designation}</p>
          <button onClick={function(){
        alert("hello")
      }}>Click</button>
        </div>
      ))}

      
    </div>
  );
}
