import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => {
  return (
    <div className="tabs flex justify-center mt-8">
      <a className="tab tab-bordered text-lg">{props.tabOne}</a>
      <a className="tab tab-bordered tab-active text-lg">{props.tabTwo}</a>
      <a className="tab tab-bordered text-lg">{props.tabThree}</a>
    </div>
  );
}

//Setting the type of the data
Header.propTypes = {
  tabOne: PropTypes.string,
  tabTwo: PropTypes.string,
  tabThree: PropTypes.string,
};

//Set Default Values
Header.defaultProps = {
  tabTwo: "About"
}
