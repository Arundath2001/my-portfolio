import React, { useState } from 'react';
import Contactform from './Contactform';
import Smallcard from './Smallcard';

function Contact(){
    return(
        <div className='contact'>
            <h5>Contact Me</h5>
            <div className='contact_data'>
                <Smallcard />
                <Contactform />
            </div>
        </div>
    );
}

export default Contact;
