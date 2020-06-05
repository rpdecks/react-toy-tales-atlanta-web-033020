import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard toy={toy} likeToy={props.likeToy} deleteToy={props.deleteToy}/>)}
    </div>
  );
}

export default ToyContainer;
