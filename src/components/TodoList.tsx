import * as React from 'react';
import TodoRow from './TodoRow';

export interface TodoListProps {
  todos: string[];
}

class TodoList extends React.Component<TodoListProps> {
  constructor(props: TodoListProps) {
    super(props);
  }

  render() {
    const { todos } = this.props;

    const todolist = todos.map((todo, index) => {
      return (
        <TodoRow key={index} todo={todo} />
      );
    });

    return (
      <ul>
        {todolist}
      </ul>
    );
  }
}

export default TodoList;
