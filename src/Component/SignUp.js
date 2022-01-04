import React from 'react';
import {Formik, Form} from 'formik';
import TextField from './TextField';

function SignUp() {
    return (
        <Formik
         initialValues = {{
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             confirmPassword: ""
         }}
        >
        {formik => (
            <div>
                <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                {console.log(formik)}
                <Form>
                    <TextField label="Fisrt Name" name="firstName"
                    type="text"
                     />
                </Form>
            </div>
        )
        }
        </Formik>
    )
}

export default SignUp
