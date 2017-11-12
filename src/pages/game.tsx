import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import * as ReactMarkdown from "react-markdown";

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
      .then(manual => this.setState({ manual }));

    fetch(`https://rawgit.com/kgtkr/${this.props.match.params.name}/master/game.json`, {
      mode: 'cors'
    }).then(res => res.json())
      .then(game => this.setState({ game }));
  }

  render() {
    return <div>
      {this.state.game !== null
        ? <iframe src={`https://kgtkr.github.io/${this.props.match.params.name}`}
          scrolling="no"
          frameBorder="0"
          width={this.state.game.width}
          height={this.state.game.height} />
        : null}

      {this.state.manual !== null
        ? <ReactMarkdown source={this.state.manual} />
        : null}
    </div>;
  }
}