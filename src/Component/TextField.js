import React from 'react';
import { ErrorMessage, useField } from 'formik';

function TestField({label, ...props}) {
    const [field, meta] =  useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label> <br />
            <input 
            className="form-control"
            autoComplete="off"
            {...field}{...props}
            />
            <ErrorMessage name={field.name}/>
        </div>
    )
}

export default TestField
