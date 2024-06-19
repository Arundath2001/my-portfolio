import React,{ useState } from "react";

function Certifications({certificates}){

    const [displayCertificate , setDisplayCertificates] = useState(null);

    function showCertificate(certificates){
        setDisplayCertificates(certificates);
    }

    function closeCertificate(){
        setDisplayCertificates(null);
    }

    function outClick(e){
        if(e.target.className === "certificate_popup" ){
            closeCertificate();
        }
    }

    return(
        <div className="certifications">
            <h5>Certifications</h5>
            
            {certificates.map((certificate, index) => (
        <div className="certification_data" key={index} style={{ marginBottom: '20px' }}>
          <p className="certification_para">{certificate.name}</p>
            <button onClick={() => showCertificate(certificate)}><svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                    <path fill="#a7a7a7" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                    </svg>
            </button>
        </div>
      ))}

      {displayCertificate && (
        <div className="certificate_popup" onClick={outClick}>
          <div className="certificate_popupmain">
            <span className="certificate_close" onClick={closeCertificate}>&times;</span>
            <h5>{displayCertificate.name}</h5>
            <img src={displayCertificate.imgUrl} alt={displayCertificate.name} style={{ maxWidth: '100%', marginTop: '10px' }} />
          </div>
        </div>
      )}

        </div>
    );
}

export default Certifications;

