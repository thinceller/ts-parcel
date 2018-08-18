import * as React from 'react';

export interface TodoRowProps {
  todo: string;
}

export interface TodoRowState {
}

class TodoRow extends React.Component<TodoRowProps, TodoRowState> {
  constructor(props: TodoRowProps) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.todo}
      </li>
    );
  }
}

export default TodoRow;
