import React, { Component } from 'react';
import { Input, Icon, Checkbox } from 'antd';

let dummyData = [
  {
    id: '1',
    todoName: 'Fold clothes',
    dueDate: '05/02/19',
    important: '',
    complete: false
  },
  {
    id: '2',
    todoName: 'Cook breakfast',
    dueDate: '05/04/19',
    important: '',
    complete: false
  },
  {
    id: '3',
    todoName: 'Wash car',
    dueDate: '05/06/19',
    important: 'filled',
    complete: false
  }
];

class SectionA extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onChangeStar = this.onChangeStar.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = {
    todoList: [],
    todoValue: ''
  };

  componentDidMount() {
    this.setState({ todoList: dummyData });
  }

  onChange(e) {
    // console.log(`checked = ${e.target.checked}`);
    // console.log(`checked = ${e.target.value}`);
    const updatedList = this.state.todoList.filter(item => item.id !== e.target.value);

    this.setState({ todoList: updatedList });
  }

  onChangeStar(id) {
    const updatedList = this.state.todoList.map(item => {
      if (item.id === id) {
        if (item.important === 'filled') {
          item.important = '';
        } else {
          item.important = 'filled';
        }
      }
      return item;
    });

    this.setState({ todoList: updatedList });
  }

  onAddTodo(e) {
    const updatedList = this.state.todoList;
    updatedList.push({
      id: this.state.todoList.length + 1,
      todoName: e.target.value,
      dueDate: '05/06/19',
      important: '',
      complete: false
    });

    this.setState({ todoList: updatedList, todoValue: '' });
  }

  handleInputChange(event) {
    this.setState({todoValue: event.target.value})
  }

  render() {
    return (
      <section id="Todo" className="SectionA">
        <div>
          <h2> Todo </h2>
          <Input
            placeholder="Add a to-do in 'inbox' "
            onChange={this.handleInputChange}
            value={this.state.todoValue}
            onPressEnter={e => this.onAddTodo(e)}
            style={{ width: '100%', marginBottom: '6px' }}
            suffix={
              <div>
                <Icon type="calendar" style={{ color: 'rgba(0,0,0,.45)', paddingRight: '12px' }} />
                <Icon type="star" style={{ color: 'rgba(0,0,0,.45)' }} />
              </div>
            }
          />
          {this.state.todoList.map(todo => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: '6px',
                marginTop: '6px',
                background: '#D3D3D3',
                padding: '6px'
              }}
            >
              <Checkbox value={todo.id} onChange={this.onChange}>
                {todo.todoName}
              </Checkbox>
              <Icon
                onClick={() => this.onChangeStar(todo.id)}
                type="star"
                theme={todo.important}
                style={{ color: 'rgba(0,0,0,.45)' }}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default SectionA;
