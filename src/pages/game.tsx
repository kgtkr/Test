import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import * as marked from "marked";

export interface GameProps extends RouteComponentProps<{ name: string }> {

}

interface GameState {
  manual: string | null,
  game: {
    width: string,
    height: string
  } | null
}

export class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      manual: null,
      game: null
    };

    fetch(`https://rawgit.com/kgtkr/${this.props.match.params.name}/master/manual.md`, {
      mode: 'cors'
    }).then(res => res.text())
      .then(manual => this.setState({ manual: marked(manual, { breaks: true, sanitize: true }) }));

    fetch(`https://rawgit.com/kgtkr/${this.props.match.params.name}/master/game.json`, {
      mode: 'cors'
    }).then(res => res.json())
      .then(game => this.setState({ game }));
  }

  render() {
    return <div>
      <div><a href={`https://kgtkr.github.io/${this.props.match.params.name}`} target="_blank">全画面</a></div>
      {this.state.game !== null
        ? <div style={{
          position: "relative",
          height: "50vh",
          paddingLeft: "75%"
        }}>
          <iframe
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            src={`https://kgtkr.github.io/${this.props.match.params.name}`}
            scrolling="no"
            frameBorder="0" />
        </div>
        : null}

      {this.state.manual !== null
        ? <div dangerouslySetInnerHTML={{ __html: this.state.manual }} />
        : null}
    </div>;
  }
}