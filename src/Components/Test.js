import React from 'react';
import {useForm} from 'react-hook-form';
import  ReactDOM  from 'react-dom/client';
function Test(){
    
    function handleSubmit(e) {
        e.preventDefault();
    
        const name = ReactDOM.findDOMNode(this._nameInput).value;
        const email = ReactDOM.findDOMNode(this._emailInput).value;
        const password = ReactDOM.findDOMNode(this._passwordInput).value;
    
        const errors = validate(name, email, password);
        if (errors.length > 0) {
          this.setState({ errors });
          return;
        }
    
        // submit the data...
      }
        
      function validate(name, email, password) {
      // we are going to store errors for all fields
      // in a signle array
      const errors = [];
    
      if (name.length === 0) {
        errors.push("Name can't be empty");
      }
    
      if (email.length < 5) {
        errors.push("Email should be at least 5 charcters long");
      }
      if (email.split("").filter(x => x === "@").length !== 1) {
        errors.push("Email should contain a @");
      }
      if (email.indexOf(".") === -1) {
        errors.push("Email should contain at least one dot");
      }
    
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      }
    
      return errors;
    }
    return(
        <li></li>
    )
}
export default Test;