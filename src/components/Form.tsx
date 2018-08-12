import * as React from 'react';

interface FormProps {
  onSubmit: (todo: string) => void;
}

interface FormState {
  todo: string;
}

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      todo: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ todo: e.currentTarget.value });
  }

  onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { todo } = this.state;
    this.props.onSubmit(todo);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.todo} onChange={this.onChange} />
        <button type="submit">作成</button>
      </form>
    );
  }
}

export default Form;
