import React from 'react'

const Input = ({name, label, onChange, error, type, value}) => {
    return (<div className="form-group">
    <label htmlFor={name}>{ label }</label>
    <input
        onChange={onChange}
        value={value} 
        name={name}
        id={name} 
        type={type} 
        className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    
    );
}
 
export default Input;