import React from "react";

const Event = (props) => {

  return (
    <div className={'Event ' + props.color}>
        <iframe src={props.youtube}
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title={props.name}
        />
        <h4>{props.name}</h4>
    </div>
  )
}

export default Event;