import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgejgygq");

  if (state.succeeded) {
    return <p>your message has been sent successfully!</p>;
  }

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact me
      </h1>
      <p className="sub-title">
        contact me for more information and get in touch with me if you want to
        know more about me
      </p>

      <div style={{justifyContent: "space-between"}} className=" flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting ..." : "submit"}
          </button>

          {state.succeeded && (
            <p>Your message has been sent successfully</p>
          )}
        </form>
        <div className=" animation">
          <div className="contact-animation">
          <img style={{ height: 250, borderRadius: 20}} src="send.png" alt="contact image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
