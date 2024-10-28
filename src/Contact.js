import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contactContain" id="contact">
            <div className="contact">
                <h2 className="contacts">Contact</h2>
                <div className="contctbor"></div>

                <form className="contact-form" action="#" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
