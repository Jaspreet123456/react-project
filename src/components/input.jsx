import React from 'react'

const Input = (name, label, onChange, value) => {
    return <div className="form-group">
    <label htmlFor="name">{ label }</label>
    <input
        onChange={onChange}
        value={value} 
        name={name}
        id={name} type="text" 
        className="form-control" />
    </div>;
}
 
export default Input;