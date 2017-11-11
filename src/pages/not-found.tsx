import * as React from 'react';
import * as icons from "material-ui/svg-icons";


export function NotFound() {
  return <div>
    <h1>Not Found</h1>
    <icons.SocialMoodBad style={{
      height: "60vh", width: "60vw"
    }} />
  </div>;
}