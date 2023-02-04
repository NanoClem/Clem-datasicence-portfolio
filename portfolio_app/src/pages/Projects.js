import React from "react";

const Projects = ({ projects }) => {
  return (
    <article id="portfolio" class="wrapper style3">
      <div class="container">
        <header>
          <h2>Here’s some projects I made.</h2>
          <p>With passion, inspired by tought problems</p>
        </header>
        <div class="row">
          {projects.map((proj, index) => (
            <div key={index} class="col-4 col-6-medium col-12-small">
              <article class="box style2">
                {proj.url
                  ? <a href={proj.url} class="image featured"><img src={proj.pic_url} alt="" /></a>
                  : <a class="image featured"><img src={proj.pic_url} alt="" /></a>
                }
                <h3>
                  {proj.url
                    ? <a href={proj.url}>{proj.title}</a>
                    : <a>{proj.title}</a>
                  }
                </h3>
                <p>{proj.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Projects;