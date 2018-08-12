import * as React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

interface AppProps {}

interface AppState {
  todos: string[];
}

class TodoApp extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      todos: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (todo: string) => {
    const { todos } = this.state;
    todos.push(todo);
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
};

export default TodoApp;
