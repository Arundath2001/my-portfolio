import React from "react";
import Workcard from "./Workcard";
import location from "../assets/location.png";


function Workexp(){

    const workdata = [{ role : "Front-end Developer" , type : "Internship" , office : "Beinex Technologies" , location : "Kochi" , date : "Sep 2023 - Jan 2024"},
                        { role : "Cyber Security" , type : "Internship" , office : "Zindot Technology" , location : "Kochi" , date : "Nov 2021 - Dec 2021"}];

    return(
        <div className="workexp">
            <h5>Work Experience</h5>

            {
                workdata.map((data , index) =>(
                    <Workcard img={location} key={index} role={data.role} office={data.office} location={data.location} date={data.date} type={data.type} />
                ))
            }
        </div>
    );

}

export default Workexp;