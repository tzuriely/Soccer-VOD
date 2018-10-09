import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
        >
      {/* <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i> */}
    </div>
  );
}

export default LeftArrow;
