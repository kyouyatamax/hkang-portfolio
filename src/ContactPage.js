import React from "react";

export class ContactPage extends React.Component {
  render() {
    return (
      <div className="subpages-container">
        <div className="subpages-container-border-gradient"></div>
        <h1 className="section-title">Want to Get in Contact?</h1>
        <div>
        </div>
        <section id="contactinfo">
          <h3>
            Email:{" "}
            <a href="mailto: hankang.bok@gmail.com">hankang.bok@gmail.com</a>
          </h3>
          <h3>
            Github:{" "}
            <a href="https://github.com/kyouyatamax">
              https://github.com/kyouyatamax
            </a>{" "}
          </h3>
          <h3>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/hankangbokbok/">
              https://www.linkedin.com/in/hankangbokbok/
            </a>
          </h3>
        </section>
        <p>Thank you for checking out my page!</p>
      </div>
    );
  }
}
