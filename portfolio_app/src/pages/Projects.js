import React from "react";

const Projects = () => {
  return (
    <>
      <article id="portfolio" class="wrapper style3">
        <div class="container">
          <header>
            <h2>Here’s some projects I made.</h2>
            <p>With passion, inspired by tought problems</p>
          </header>
          <div class="row">
            <div class="col-4 col-6-medium col-12-small">
              <article class="box style2">
                <a class="image featured"><img src="/images/Gan_img.jpeg" alt="" /></a>
                <h3><a>Generate images with a DCGAN model (ML CI/CD)</a></h3>
                <p>Using data from reddit and a custom rest api. Does this image really exist ?</p>
              </article>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <article class="box style2">
                <a href="https://github.com/NanoClem/scrap-a-job" class="image featured"><img src="/images/finding_a_job.png" alt="" /></a>
                <h3><a href="https://github.com/NanoClem/scrap-a-job">Find a job with data scraping REST api</a></h3>
                <p>See how I conducted my job hunting and why I might already know about you !</p>
              </article>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <article class="box style2">
                <a href="https://github.com/NanoClem/life-expectancy-prediction" class="image featured"><img src="/images/life_exp.png" alt="" /></a>
                <h3><a href="https://github.com/NanoClem/life-expectancy-prediction">Countries's life expectancy prediction</a></h3>
                <p>What would be your country's life expectancy in 5 years ?</p>
              </article>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <article class="box style2">
                <a class="image featured"
                ><img src="/images/game_economy.png" alt=""
                  /></a>
                <h3>
                  <a>Scraping of a video game's market economy</a>
                </h3>
                <p>
                  Data scraping/analysis, REST API, reporting and docker. (Ask me
                  directly).
                </p>
              </article>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <article class="box style2">
                <a class="image featured"><img src="/images/IoT.png" alt="" /></a>
                <h3><a>IoT: Bosh XDK sensor data engineering</a></h3>
                <p>
                  Building a speed layer with Hadoop, Spark and Tableau. (Ask me directly).
                </p>
              </article>
            </div>
            <div class="col-4 col-6-medium col-12-small">
              <article class="box style2">
                <a
                  href="https://github.com/NanoClem/facecam-recognition"
                  class="image featured"
                ><img src="/images/face_recognition.jpg" alt=""
                  /></a>
                <h3>
                  <a href="https://github.com/NanoClem/facecam-recognition"
                  >Face recognition app powered by a python REST API</a
                  >
                </h3>
                <p>Who's knocking at your door ?</p>
              </article>
            </div>
          </div>
          <footer>
            <a href="#contact" class="button large scrolly"
            >Get in touch with me</a
            >
          </footer>
        </div>
      </article>
    </>
  )
}

export default Projects;