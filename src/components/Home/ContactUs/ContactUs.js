import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section id="contact-us" className="my-5 py-5 text-center ">
      <div className="indexing">
        <h4 className="text-info my-2">Contact Us</h4>
        <h1 className="pb-3">Always Connect with Us</h1>
        <div style={{ width: "60%" }} className="mx-auto">
          <form action="">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address *"
              ></input>
            </div>
            <div class="mb-3">
              <input
                type="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Subject*"
              ></input>
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Message*"
              ></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-primary my-2 py-2"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
