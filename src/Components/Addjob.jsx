import { useState, useEffect } from "react";
import "../App.css";
import DBJSON from "../db1.json";

export const Addjob = () => {
  // total obj in array.

  const { jobs } = DBJSON;
  const initialData = jobs || [];
  const [data, setData] = useState(initialData);
  const [showall, setShowall] = useState(initialData);
 
 
  // single obj initial state
  const initialState = {
    name: "",
    jobtitle: "",
    salary: "",
    jobdescription: "",
    location: "",
    jobtype: "",
    
  };

  const [formData, setformData] = useState(initialState);

  const handlesubmit = (e) => {
    e.preventDefault();
    const showalladata = () => {
      return [...data, formData];
    };
    setData(showalladata);
    setShowall(showalladata);
  };
  console.log(showall);

  

  const handleChange = (e) => {
    const { name, jobtitle,value,salary,jobdescription,location,jobtype} = e.target;
    //console.log(name, "name", value, "value",jobtitle,"jobtitle");

    setformData((prevState) => ({
      ...prevState,
      [name]: value,
      [jobtitle]:value,
      [salary]:value,
      [jobdescription]:value,
    [location]:value,
    [jobtype]:value,
    }));
  };
  
  const {
    name,
    jobtitle,
    salary,
    jobdescription,
    location,
    jobtype,
  } = formData;

  

  return (
    <div>
     
      <br />

      <div>
        {data.map(
          ({
            name,
            jobtitle,
            salary,
            jobdescription,
            location,
            jobtype,
            
          }) => {
                     
            return (
              <div>
                <div className="flexx">
                  <div className="shadoww">
                    <div className="main">
                      <div>
                        {" "}
                   </div>
                      <div>
                        <h1 className="add">{name}</h1>
                        <h6 className="add">{jobtitle}</h6>
                        <h6 className="add">{salary}</h6>
                        <h6 className="add">{jobdescription}</h6>
                        <h6 className="add">{location}</h6>
                        <h6 className="add"> {jobtype}</h6>
                        
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};



