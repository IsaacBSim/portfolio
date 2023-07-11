import React from "react";

const ContactSection = () => {
    return (

        <section id="contact" className="card">
        <div class="section-box">
        <h2>Contact</h2>
            <p>Please use the
            <a href="https://calendly.com/isaacbsim/30min" target="_blank">
                {" "}Calendly Link{" "}</a>
            to schedule a meeting
            </p>
            <a href="mailto:isaacb.sim@virginia.edu">
            isaacb.sim@virginia.edu
            </a>
            <a href="https://www.linkedin.com/in/isaacbsim/">
            <img className="contact-image" src="./linkedin.png" alt="linkedin" />
            </a>

        </div>
        </section>

);
};

export default ContactSection;