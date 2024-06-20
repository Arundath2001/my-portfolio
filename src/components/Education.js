import React from "react";
import Workcard from "./Workcard";

function Education(){

    const education = [{ course : "Bachelor in Technology" , type : "Full Time"  , college : "APJ Abdul Kalam Technological University" , date : "2019 - 2023"}];

    return(
        <div className="education">
            <h5>Education</h5>

           {
            education.map((data , index)=>(
                <Workcard key={index} role={data.course} office={data.college} date={data.date} type={data.type} img={""} />
            ))
           }

        </div>
    );

}

export default Education;