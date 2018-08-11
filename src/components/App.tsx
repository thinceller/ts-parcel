import * as React from 'react';

export interface Props {
  content: string;
};

class App extends React.Component<Props> {
  render() {
    return (
      <div>{this.props.content}</div>
    );
  }
};

export default App;
