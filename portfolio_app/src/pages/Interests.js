import React from "react";

const Interests = ({ interests }) => {
  return (
    <article id="work" class="wrapper style3">
      <div class="container">
        <header>
          <h2>Areas of interest</h2>
          <p>
            <i class="fa fa-quote-left fa-lg" aria-hidden="true"></i>
            &nbsp;My career is an endless learning journey&nbsp;
            <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i>
          </p>
        </header>
        <div class="row aln-center">
          {interests.map(({ title, text, icon }, index) => (
            <div key={index} class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class={`icon solid ${icon} fa-2x`}></span>
                <h3 class="hardskill">{title}</h3>
                <p>{text}</p>
              </section>
            </div>
          ))}
        </div>

        <footer>
          <a href="#portfolio" class="button large scrolly">
            See some of my projects
          </a>
        </footer>
      </div>
    </article>
  )
}

export default Interests;