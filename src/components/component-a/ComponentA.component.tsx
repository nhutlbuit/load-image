import React, { useState } from "react";
import "./ComponentA.component.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 // import Paperclip from '../../../public/images/Paperclip.png';

 const Paperclip = require('../../../public/images/Paperclip.png');

function ComponentA() {


  const renderFontAwsome = () => {
    return (
    <div>

    <FontAwesomeIcon icon={faCoffee} />
    .............
    <img src="../../../public/images/Paperclip.png" />
    <img src ={Paperclip} width="100" height="50" />
    ...
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
