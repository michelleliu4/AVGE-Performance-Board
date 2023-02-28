import React from "react";
import Event from './Event';

const Board = () => {
  return (
    <div className="container">
      <div className="Board">
        <Event youtube='https://www.youtube.com/embed/g4skUVBdACo' color='green' name='Kigeki (Spy x Family)'/>
        <Event youtube='https://www.youtube.com/embed/GxswqonTM3o' color='green' name='(Professor Layton and the Curious Village)'/>
        <Event youtube='https://www.youtube.com/embed/BBDl7BONHlM' color='green' name='Snow Halation (Love Live!)'/>
        <Event youtube='https://www.youtube.com/embed/eKJGMQ3KMls' color='green' name="Promise of the World (Howl's Moving Castle)"/>
        <Event youtube='https://www.youtube.com/embed/IMT7H5PEyws' color='green' name='Resurrections ~Awake (Celeste)'/>
        <Event youtube='https://www.youtube.com/embed/riKbKaWfjhQ' color='green' name='My Lie (Your Lie in April)'/>
        <Event youtube='https://www.youtube.com/embed/Awauky3_xbY' color='green' name='Detective Conan Main Theme (Detective Conan)'/>
        <Event youtube='https://www.youtube.com/embed/SE_IjCmiCQw' color='green' name='Ashitaka and San (Princess Mononoke)'/>
        <Event youtube='https://www.youtube.com/embed/7a91eDJCKww' color='green' name='Duet (OMORI)'/>
        <Event youtube='https://www.youtube.com/embed/SOYUFfyLu8E' color='green' name='Path of the Wind (My Neighbor Totoro)'/>
        <Event youtube='https://www.youtube.com/embed/TzGkTg6lBHY' color='purple' name='Gate of Steiner (Steins;Gate)'/>
        <Event youtube='https://www.youtube.com/embed/iP3gdnII06c' color='purple' name='Final Fantasy VII Main Theme'/>
        <Event youtube='https://www.youtube.com/embed/V1sbA2zTrMU' color='purple' name='Crescent Moon (Iron Blooded Orphans 2)'/>
        <Event youtube='https://www.youtube.com/embed/NsPlmG9aTdM' color='purple' name='Breath of the Wild Main Theme'/>
        <Event youtube='https://www.youtube.com/embed/I24jHRYiXwg' color='purple' name='Fountain of Dreams (Kirby)'/>
        <Event youtube='https://www.youtube.com/embed/7j8qn5lLocc' color='purple' name="A Town with an Ocean View (Kiki's Delivery Service)"/>
      </div>
    </div>
  )
}

export default Board;