import React from 'react';
import { useField } from 'formik';

function TestField({label, ...props}) {
    const [field, meta] =  useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label> <br />
            <input type="text" />
        </div>
    )
}

export default TestField
