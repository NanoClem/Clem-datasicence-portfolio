import React from "react";
import parse from 'html-react-parser'

import Avatar from "../components/ui/Avatar";

const Home = ({ name, description, profile_pic }) => {
  return (
    <article id="top" class="wrapper style1">
      <div class="container">
        <div class="row">
          <div class="col-4 col-5-large col-12-medium">
            <Avatar profile_pic={profile_pic} />
          </div>
          <div class="col-8 col-7-large col-12-medium">
            <header>
              <h1>Nice to meet you. I'm <strong>{name}</strong>.</h1>
            </header>
            <p>{parse(description)}</p>
            <a href="#experience" class="button large scrolly">Learn about it</a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Home;