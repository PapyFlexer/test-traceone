import React from "react";

import roverLeft from "./img/left.png";
import roverRight from "./img/right.png";
import roverUp from "./img/up.png";
import roverDown from "./img/down.png";

const tileBackgrounds = {
  rover: [
    `url(${roverUp})`,
    `url(${roverRight})`,
    `url(${roverDown})`,
    `url(${roverLeft})`
  ],
  tile: `#fff`
};

function Tile(props) {
  var classString = `tile ${props.hasRover ? 'rover' : ''}`;
    let background = tileBackgrounds.tile;

    if (props.hasRover) {
      background = tileBackgrounds.rover[props.direction];
    }

    return (
      <td className={classString} style={{ background: background }}>
        {}
      </td>
    ); 
  
};
export default Tile;
