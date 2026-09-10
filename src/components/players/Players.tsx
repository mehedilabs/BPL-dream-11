import  { use } from 'react';
import type { Iplayer } from '../../types/player';

interface PlayersProps {
  playersPromise : Promise<Iplayer[]>
}

const Players = ({playersPromise}: PlayersProps) => {
  console.log(playersPromise)
const players = use(playersPromise)
console.log(players, "players")
  return (
    <div>
      
    </div>
  );
};

export default Players;