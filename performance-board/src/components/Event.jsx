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
        <h5>{props.name}</h5>
    </div>
  )
}

export default Event;