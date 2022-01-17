import { useState, useEffect } from "react";
import "../App.css";
import DBJSON from "../db.json";

export const Admin = () => {
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
      <form>
        <legend>Please Add Company Details</legend>
        <div>
          <label>Company name</label>
          <input
            type="text"
            class="form-control form-control-sm"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <br/>
        <div>
          <label>Job Title</label>
          <input
            type="text"
            class="form-control-sm"
            onChange={handleChange}
            value={jobtitle}
            name="jobtitle"
          />
          <br/>
          <br/>
        </div>
        <div>
          <label>Salary</label>
          <input
            name="salary"
            value={salary}
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
          ></input>
        </div>
        <br/>
        <div>
          <label>Jobdescription</label>
          <input
            type="text"
            class="form-control form-control-sm"
            onChange={handleChange}
            value={jobdescription}
            name="jobdescription"
          />
        </div>
        <br/>
        <div>
          <label>Location</label>
          <input
            type="text"
            onChange={handleChange}
            value={location}
            name="location"
          />
        </div>
        <br/>
        <div>
          <label>Jobtype</label>
          <input
            type="text"
            onChange={handleChange}
            value={jobtype}
            name="jobtype"
          />
        </div>
        <br/>
        <div>
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            onClick={handlesubmit}
          >
            ADD JOB
          </button>
        </div>
      </form>
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
                        <button className="add">Apply</button>
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



