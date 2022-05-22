import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validateEmail } from "../../helpers/helpers";
function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const errorCheck = (value) => {
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (value) {
      if (value === "name" && !name) {
        setNameError(true);
        return;
      }
      if (value === "email" && !email) {
        setEmailError(true);
        return;
      }
      if (value === "message" && !message) {
        setMessageError(true);
        return;
      }
    }

    if (!name) {
      setNameError(true);
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }
  };
  return (
    <>
      <h1>Contact Me</h1>
      <div className="text-container">
        <div className="text-input">
          <TextField
            id="standard-basic"
            label="Name"
            value={name}
            onChangeCapture={(e) => {
              setName(e.target.value);
            }}
            error={nameError}
            helperText={nameError && "You must enter your name!"}
            onBlur={() => errorCheck("name")}
            fullWidth
          />
        </div>
        <div className="text-input">
          <TextField
            id="standard-basic"
            label="Email"
            onChangeCapture={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            error={emailError}
            helperText={emailError && "You must enter a valid email!"}
            onBlur={() => errorCheck("email")}
            fullWidth
          />
        </div>
        <div className="text-input">
          <TextField
            id="standard-basic"
            multiline
            label="Message"
            minRows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            error={messageError}
            helperText={messageError && "You must enter a message!"}
            onBlur={() => errorCheck("message")}
            fullWidth
          />
        </div>
      </div>
      <Button
        variant="contained"
        onClickCapture={() => {
          errorCheck();
        }}
      >
        Submit
      </Button>
    </>
  );
}
export default Contact;
