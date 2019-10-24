import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const PlayerCard = props => (
   <Card>
      <Card.Content>
         <h3>{props.players.name}</h3>
      </Card.Content>
      <Card.Content>
         <p>Searches: {props.players.searches}</p>
         <p>Country: {props.players.country}</p>
      </Card.Content>
   </Card>
);

export default PlayerCard;
