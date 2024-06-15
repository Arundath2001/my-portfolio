import React from "react";

function Headmin(props){

    return(

        <div className="headmain">
            <div className="headmain_data">
                <h2>{props.mainhead}</h2>

                <h3>{props.subhead}</h3>
            </div>
        </div>

    );

}

export default Headmin;