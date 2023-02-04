import React from "react";

const Avatar = ({ profile_pic }) => {
  return (
    <span class="image fit">
      <img src={profile_pic} alt="picture" />
    </span>
  )
}

export default Avatar;