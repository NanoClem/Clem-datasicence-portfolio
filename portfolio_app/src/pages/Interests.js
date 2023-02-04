import React from "react";

const Interests = () => {
  return (
    <>
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
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-crosshairs fa-2x"></span>
                <h3 class="hardskill">Prospecting</h3>
                <p>
                  Learn how to ally business knowledge and my tech skills to
                  target valuable information. The main goal is to be fully data
                  driven.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-flask fa-2x"></span>
                <h3 class="hardskill">Data preparation</h3>
                <p>
                  Collect, clean and shape datasets to be in the best possible
                  conditions for analysis. For me, the majority of the time is
                  spent on this discipline.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon fa-chart-bar fa-2x"></span>
                <h3 class="hardskill">Data analysis</h3>
                <p>
                  Find insights and correlations throught statistical analysis and
                  visualisations. What is fun about it is that we may don't know what we're looking for.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-graduation-cap fa-2x"></span>
                <h3 class="hardskill">Machine learning</h3>
                <p>
                  I am enthusiastic about ML techniques and when to use the right
                  model, on a given dataset for a given purpose.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-eye fa-2x"></span>
                <h3 class="hardskill">Computer vision</h3>
                <p>
                  An important topic impacting nowadays ML techniques and applications. I find this domain quite vast with a multitude
                  of possible uses.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-cloud fa-2x"></span>
                <h3 class="hardskill">Cloud computing</h3>
                <p>
                  My past experiences with GCP and Azure showed me that ML models can be
                  easily integrated and worked around in such environments.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-recycle fa-2x"></span>
                <h3 class="hardskill">CI/CD for ML</h3>
                <p>
                  Continuous integration and development in ML field raise new challenges :
                  should we include the model performance in the testing process ? How to deploy it as a service (web, embeded) ?
                  Should we include data in version control ?
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-cubes fa-2x"></span>
                <h3 class="hardskill">ETL processing</h3>
                <p>
                  I realized business knowledge is just as important to design and implement
                  proper ETL pipelines. Data should to be processed depending on who will use them, how often they will be accessed, and the scaling capabilities.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-cube fa-2x"></span>
                <h3 class="hardskill">Software dev</h3>
                <p>
                  Provide well-designed code with an ounce of software engineering skills for a
                  better performance and maintainability. A balance between complexity
                  and readability is key.
                </p>
              </section>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <section class="style1">
                <span class="icon solid fa-comments fa-2x"></span>
                <h3 class="hardskill">Collaboration</h3>
                <p>
                  I enjoyed working, creating, exchanging alongside business part
                  in my previous experiences. Maintaining relations is also quite
                  entertaining !
                </p>
              </section>
            </div>
          </div>

          <footer>
            <a href="#portfolio" class="button large scrolly">
              See some of my projects
            </a>
          </footer>
        </div>
      </article>
    </>
  )
}

export default Interests;