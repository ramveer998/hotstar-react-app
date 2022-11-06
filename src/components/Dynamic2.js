import React from "react";
import { useState } from "react";

function Dynamic2() {
   let [datas, setData] = useState ( [
    { 
      id:1,
      firstName: "Ramveer",
      lastName: "Chauhan",
      age: 23,
      designation: "Software Engineer",
    },
    { 
      id:2,
      firstName: "Allex",
      lastName: "Sam",
      age: 20,
      designation: "Trainee Engineer",
    },
    { 
      id:3,
      firstName: "Miller",
      lastName: "Park",
      age: 45,
      designation: "Jr. Software Engineer",
    },
    { 
      id:4,
      firstName: "Ford",
      lastName: "Toyo",
      age: 30,
      designation: "Sr. Software Engineer",
    },
    { 
      id:5,
      firstName: "King",
      lastName: "Mexo",
      age: 18,
      designation: "Associate Engineer",
    },
  ]);
  let handleDelete = (id)=>{
        setData(datas.filter(x=>x.id !=id))
  }
  return (
    <div className="dynamic">
      {datas.map((value) => (
        <div className="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" style={{width:200}} />
          <div className="container">
            <h4>
              <b>
                {value.firstName} {value.lastName}
              </b>
            </h4>
            <p>{value.age}</p>
            <p>{value.designation}</p>
            <button onClick={()=>{handleDelete(value.id)}}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dynamic2;
