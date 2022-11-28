import React,{useRef, useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";

function FormCont() {
  const form = useRef();
  const matches = useMediaQuery("(max-width:800px)");

  const [state, setState] = useState(false);
  const [values, setValues] = useState({
    Name: null,
    number: null,
    email: null,
    message: null,
  });

  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();
    const { Name, number, email, message } = values;
    if (state === true) {
      const variant = "alert";
      enqueueSnackbar(
        "We got your message please wait we will get back to you ASAP!",
        { variant }
      );
    }

    if (
      Name !== null &&
      number !== null &&
      email !== null &&
      message !== null &&
      state !== true
    ) {
      setState(true);
      emailjs
        .sendForm(
          "service_speazei",
          "template_7jsytkg",
          form.current,
          "CD24sbS_95wlWdtJI"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
      const variant = "success";
      enqueueSnackbar(
        "Message sent to Vogue Wood. Team will get back to you ASAP !",
        { variant }
      );
    } else if (state !== true) {
      const variant = "error";
      enqueueSnackbar("please fill all the fields", { variant });
    }
  };

  return (
    <>
    <form className="formBox" ref={form} onSubmit={sendEmail}>
      <label className="formLabel">Name</label>
      <input
        input={values.Name}
        onChange={(e) => setValues({ ...values, Name: e.target.value })}
        className="formInput"
        type="text"
        name="user_name"
      />
      <label className="formLabel">number</label>
      <input
        input={values.number}
        onChange={(e) => setValues({ ...values, number: e.target.value })}
        className="formInput"
        type="text"
        name="user_number"
      />
      <label className="formLabel">Email</label>
      <input
        input={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        className="formInput"
        type="email"
        name="user_email"
      />
      <label className="formLabel">Message</label>
      <textarea
        input={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        style={{
          width: matches === true ? "95% " : "70%",
        }}
        className="formInput"
        name="message"
      />
      <Button
        className="formBut"
        style={{ color: "white" }}
        type="submit"
        value="Send"
      >
        send
      </Button>
    </form>
    </>
  );
}

export default FormCont;
