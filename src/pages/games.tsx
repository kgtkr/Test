import * as React from 'react';
import { Link } from "react-router-dom";

export function Games() {
  return <ul>
    <li><Link to="/game/kubitsurishi">首吊り士</Link></li>
    <li><Link to="/game/auau">相模原あうあう</Link></li>
    <li><Link to="/game/track-attack">トラックアタック</Link></li>
    <li><Link to="/game/hoku-d">ほくほくちーだいなそー</Link></li>
    <li><Link to="/game/freeze-or-burn">Freeze Or Burn</Link></li>
  </ul>;
}