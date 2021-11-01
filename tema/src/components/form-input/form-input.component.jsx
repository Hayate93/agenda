import React from "react";

const FormInput = (props) => {
    return (
        <div className="input-group">
            <label>{props.label}</label>
            <input { ...props } />
            <br />
        </div>
    );
};

export default FormInput;
