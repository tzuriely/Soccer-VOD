import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
        >
      {/* <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i> */}
    </div>
  );
}

export default RightArrow;