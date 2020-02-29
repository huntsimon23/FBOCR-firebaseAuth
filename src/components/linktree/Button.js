import React from 'react';

function Button(props) {
return (
<React.Fragment>
   <button 
   className="button btn-primary"
   onClick={props.link}
   >
   {props.nametext}
   </button>
   <div className="card-body">
    <p className="card-text">{props.subtext}</p>
   </div>
</React.Fragment>
)} 

export default Button;