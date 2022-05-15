import React from "react";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>
      <div>
        <TextField id="standard-basic" label="Name" variant="standard" />
      </div>
      <div>
        <TextField id="standard-basic" label="Email" variant="standard" />
      </div>
      <div>
        <TextField id="standard-basic" label="Message" variant="standard" />
      </div>
    </section>
  );
}
export default Contact;
