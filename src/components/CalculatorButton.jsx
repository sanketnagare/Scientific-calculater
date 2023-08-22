import React from 'react';

const CalculatorButton = ({ value, className, onClick }) => {
    // can add new classname and send it through props
    return <input type="button"
        className={`btn ${className}`}
        value={value}
        onClick={onClick} />;
};

export default CalculatorButton;