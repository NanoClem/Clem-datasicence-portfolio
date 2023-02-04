import React from "react";

const Contact = ({ contact }) => {
  return (
    <article id="contact" class="wrapper style4">
      <div class="container medium">
        <header>
          <h2>I'm available for hiring.</h2>
          <p>
            Contact me on my email address : <a href={`mailto: ${contact.email}`}>{contact.email}</a>.
          </p>
          <p>
            I am also fully opened to critics towards this portfolio, frontend isn't my speciality.
            So feel free to give me any feedback/advice !
          </p>
        </header>
        <div class="col-12">
          <hr />
          <h3>Find me also on ...</h3>
          <ul class="social">
            {Object.entries(contact).map(([key, value]) => {
              if (key !== "email") {
                return (
                  <li key={key}>
                    <a href={value} class="icon brands fa-linkedin-in">
                      <span class="label">{key}</span>
                    </a>
                  </li>
                )
              }
            })}
          </ul>
          <hr />
        </div>
        <footer>
          <ul id="copyright">
            <li>
              Design inspired from: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </footer>
      </div>
    </article>
  )
}

export default Contact;