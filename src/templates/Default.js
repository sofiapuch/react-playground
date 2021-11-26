import React from 'react';
import Navigation from '../layout/navigation/Navigation';

const DefaultTemplate = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <div className={`page__body ${props.className ? props.className : ''}`}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default DefaultTemplate;


