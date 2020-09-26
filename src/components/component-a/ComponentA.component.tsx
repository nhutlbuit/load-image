import React, { useState } from "react";
import "./ComponentA.component.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFlag } from '@fortawesome/free-solid-svg-icons'

// import Paperclip from '../../../public/images/Paperclip.png';

function ComponentA() {


  const renderFontAwsome = () => {
    return (
    <div>

    <FontAwesomeIcon icon={faFlag} />
    <i className="fas fa-coffee"></i>
    <img src="../../../public/images/Paperclip.png" />
    {/* <img src ={Paperclip} width="100" height="50" /> */}
    <div className="load-image"></div>
    </div>)

    
  }

  return (
    <>
    {renderFontAwsome()}
    
    </>
  );
}

export default ComponentA;
