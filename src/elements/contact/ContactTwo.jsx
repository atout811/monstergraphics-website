import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const emailServiceId = "service_4k2ukdj";
const TemplateID = "template_k67ssdc";
const publicKey = "KAU8JZU94VBRJ047X";
const ContactTwo = () => {
  const form = useRef();
  const [rnName, setrnName] = useState("");
  const [rnEmail, setrnEmail] = useState("");
  const [rnSubject, setrnSubject] = useState("");
  const [rnMessage, setrnMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(emailServiceId, TemplateID, form.current, publicKey).then(
      (result) => {
        alert("we got your message, Thanks for reaching out!")
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // {
    //   from_name: rnName,
    //   email: rnEmail,
    //   subject: rnSubject,
    //   message: rnMessage,
    // },
  };

  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <span className="subtitle">Let's Say Hi</span>
              <h2 className="title">Contact With Us.</h2>
              <div className="im_address">
                <span>Call us directly:</span>
                <a className="link im-hover" href="phone">
                  +1(929)257-6102
                </a>
              </div>
              <div className="im_address mt--5">
                <span>Contact Email:</span>

                <a
                  className="link im-hover"
                  href="mailto:Hello@monstergraphics.com"
                >
                  Hello@monstergraphics.com
                </a>
              </div>
            </div>
            <div className="form-wrapper">
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    // value={rnName}
                    // onChange={(e) => {
                    //   this.setState({ rnName: e.target.value });
                    // }}
                    placeholder="Your Name *"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    // value={rnEmail}
                    // onChange={(e) => {
                    //   this.setState({ rnEmail: e.target.value });
                    // }}
                    placeholder="Your email *"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    // value={rnSubject}
                    // onChange={(e) => {
                    //   this.setState({ rnSubject: e.target.value });
                    // }}
                    placeholder="Write a Subject"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    // value={rnMessage}
                    // onChange={(e) => {
                    //   this.setState({ rnMessage: e.target.value });
                    // }}
                    placeholder="Your Message"
                  />
                </label>
                <button
                  className="btn-default"
                  id="mc-embedded-subscribe"
                  type="submit"
                  value="Send"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div
              className="thumbnail mb_md--30 mb_sm--30"
              style={{ padding: "5rem" }}
            >
              <img src="/assets/images/about/about-1.png" alt="trydo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactTwo;
