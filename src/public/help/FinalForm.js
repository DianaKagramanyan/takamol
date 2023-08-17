import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from "react-router-dom";

const required = value => (value ? undefined : 'This field is required');

const FormComponent = () => {
  const onSubmit = (values) => {
    // Perform form submission logic here
    alert(`Submitted Data:
      Name: ${values.name}
      Mobile: ${values.mobile}
      Email: ${values.email}
      Subject: ${values.subject}
      Message: ${values.message}
    `);
  };

  return (
    <div>
      <h2 className="text-conn">Connect with us</h2>
      <div className="main-form">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="form">
                <div className="input">
                  <Field
                    name="name"
                    validate={required}
                  >
                    {({ input, meta }) => (
                      <TextField
                        label="* Name"
                        {...input}
                        error={meta.touched && meta.error}
                        helperText={meta.touched && meta.error}
                      />
                    )}
                  </Field>
                  <br />
                  {/* Repeat for other fields */}
                  <div className="button-send">
                    <Button
                      className="button-send"
                      sx={{
                        color: "white",
                        backgroundColor: "rgb(60, 128, 132)",
                        width: "150px",
                      }}
                      variant="contained"
                      type="submit"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          )}
        />

        {/* Rest of the component */}
      </div>
    </div>
  );
};

export default FormComponent;

