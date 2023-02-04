import React from "react";

const Contact = () => {
  return (
    <>
      <article id="contact" class="wrapper style4">
        <div class="container medium">
          <header>
            <h2>I'm available for hiring.</h2>
            <p>
              Contact me on my email address :
              <a href="mailto: clemdec.pro@gmail.com">clemdec.pro@gmail.com</a>.
            </p>
            <p>
              I am also fully opened to critics towards this portfolio, feel free
              to give me any advice !
            </p>
          </header>
          <div class="col-12">
            <hr />
            <h3>Find me also on ...</h3>
            <ul class="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/clement-decoopman"
                  class="icon brands fa-linkedin-in"
                ><span class="label">LinkedIn</span></a
                >
              </li>
              <li>
                <a
                  href="https://github.com/NanoClem"
                  class="icon brands fa-github"
                ><span class="label">Github</span></a
                >
              </li>
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
    </>
  )
}

export default Contact;