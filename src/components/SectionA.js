import React, { Component } from 'react';
import { Input, Icon, Checkbox, Divider } from 'antd';

import sound from '../assets/sounds/sound.mp3';

let dummyData = [
  {
    id: '0',
    todoName: 'Fold clothes',
    dueDate: '05/02/19',
    important: '',
    complete: false,
    isInEditMode: false
  },
  {
    id: '1',
    todoName: 'Cook breakfast',
    dueDate: '05/04/19',
    important: '',
    complete: false,
    isInEditMode: false
  },
  {
    id: '2',
    todoName: 'Wash car',
    dueDate: '05/06/19',
    important: 'filled',
    complete: false,
    isInEditMode: false
  }
];

let completedTasks = [
  {
    id: '3',
    todoName: 'Organize clothes',
    dueDate: '05/02/19',
    important: '',
    complete: true,
    isInEditMode: false
  },
  {
    id: '4',
    todoName: 'Cook dinner',
    dueDate: '05/04/19',
    important: '',
    complete: true,
    isInEditMode: false
  },
  {
    id: '5',
    todoName: 'Wash cat',
    dueDate: '05/06/19',
    important: 'filled',
    complete: true,
    isInEditMode: false
  }
];

function sortByPriority(array) {
  let sortedArray = [];

  array.forEach(element => {
    if (element.important === 'filled') {
      // add element to the start of array
      sortedArray.unshift(element);
    } else {
      // add element to the end of array
      sortedArray.push(element);
    }
  });
  return sortedArray;
}

class SectionA extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    // this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStar = this.onChangeStar.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
    this.changeEditMode = this.changeEditMode.bind(this);
    this.onBlurValue = this.onBlurValue.bind(this);
    this.alerts = this.alerts.bind(this);
  }
  state = {
    todoList: [],
    completedList: [],
    todoValue: '',
    previousTodo: ''
    // renderCalender: false
  };

  handleChange = selectedDate => {
    this.setState({ selectedDate });
  };

  componentDidMount() {
    this.setState({ todoList: sortByPriority(dummyData) });
    this.setState({ completedList: completedTasks });
  }

  // When box check is off or on
  onChange(e) {
    // Check on
    if (e.target.checked === true) {
      this.alerts();

      let completedTask = {};

      this.state.todoList.map(item => {
        if (item.id === e.target.value) {
          item.complete = !item.complete;
          completedTask = item;
        }
        return item;
      });

      this.setState(state => {
        const todoList = state.todoList.filter(item => item.id !== e.target.value);

        return {
          todoList
        };
      });

      this.setState(state => {
        const completedList = state.completedList.concat(completedTask);

        return {
          completedList
        };
      });
    }
    // Check off
    else {
      let incompletedTask = {};

      this.state.completedList.map(item => {
        if (item.id === e.target.value) {
          item.complete = !item.complete;
          incompletedTask = item;
        }
        return item;
      });

      this.setState(state => {
        const todoList = state.todoList.concat(incompletedTask);

        return {
          todoList: sortByPriority(todoList)
        };
      });

      this.setState(state => {
        const completedList = state.completedList.filter(item => item.id !== e.target.value);

        return {
          completedList
        };
      });
    }
  }

  // onChangeDate(date, dateString) {
  //   console.log(date, dateString);
  // }

  // When star is applied
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

    this.setState({ todoList: sortByPriority(updatedList) });
  }

  // Add a todo list item
  onAddTodo(e) {
    const updatedList = this.state.todoList;
    updatedList.push({
      id: this.state.todoList.length + this.state.completedList.length + 1,
      todoName: e.target.value,
      dueDate: '05/06/19',
      important: '',
      complete: false,
      isInEditMode: false
    });

    this.setState({ todoList: sortByPriority(updatedList), todoValue: '' });
  }

  // Change input box value
  handleInputChange(event) {
    this.setState({ todoValue: event.target.value });
  }

  // Apply changes to existing todo
  handleTodoInputChange(event, id) {
    const updatedList = this.state.todoList.map(item => {
      if (item.id === id) {
        item.todoName = event.target.value;
      }
      return item;
    });
    this.setState({ todoList: updatedList });
  }

  // Change variable to track which todo is in edit mode
  changeEditMode(id) {
    const updatedList = this.state.todoList.map(item => {
      if (item.id === id) {
        item.isInEditMode = !item.isInEditMode;
      }
      return item;
    });

    this.setState({ todoList: updatedList, previousTodo: id });
  }

  // On clicking outside of focus
  onBlurValue(event, id) {
    const updatedList = this.state.todoList.map(item => {
      if (item.id === id) {
        item.isInEditMode = !item.isInEditMode;
      }
      return item;
    });
    this.setState({ todoList: updatedList });
  }

  // // On clicking outside of focus
  // onBlurCalendar() {
  //   this.setState({ renderCalender: false });

  //   console.log('On blur running');
  // }

  // Create sound when called
  alerts = () => {
    let audio = new Audio(sound);
    this.myRef = React.createRef();
    return audio.play();
  };

  render() {
    return (
      <section id="Todo" className="SectionA">
        <div>
          <h2> Todo </h2>
          <div className="input-section">
            <Input
              placeholder="Add a to-do in 'inbox' "
              onChange={this.handleInputChange}
              value={this.state.todoValue}
              onPressEnter={e => this.onAddTodo(e)}
              style={{ marginRight: '6px', marginBottom: '6px' }}
              suffix={
                <div>
                  {/* <Icon
                  type="calendar"
                  style={{ color: 'rgba(0,0,0,.45)', paddingRight: '12px' }}
                  onClick={() =>
                    this.state.renderCalender
                      ? this.setState({ renderCalender: false })
                      : this.setState({ renderCalender: true })
                  }
                /> */}
                  {/* <Icon type="star" style={{ color: 'rgba(0,0,0,.45)' }} /> */}
                </div>
              }
            />
            {/* <DatePicker onBlur={() => this.onBlurCalendar} onChange={this.onChangeDate} /> */}
          </div>
          <Divider>Todos</Divider>
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
              <Checkbox value={todo.id} onChange={this.onChange} checked={todo.complete} />
              <div onDoubleClick={() => this.changeEditMode(todo.id)}>
                {todo.isInEditMode ? (
                  <Input
                    styles={{ width: '1000px' }}
                    autoFocus={true}
                    onBlur={e => this.onBlurValue(e, todo.id)}
                    defaultValue={todo.todoName}
                    onChange={e => this.handleTodoInputChange(e, todo.id)}
                    onPressEnter={e => this.onBlurValue(e, todo.id)}
                  />
                ) : todo.complete ? (
                  <strike>{todo.todoName}</strike>
                ) : (
                  todo.todoName
                )}
              </div>

              <Icon
                onClick={() => {
                  todo.complete ? console.log('Do nothing!') : this.onChangeStar(todo.id);
                }}
                type="star"
                theme={todo.important}
                style={{ color: 'rgba(0,0,0,.45)' }}
              />
            </div>
          ))}
          <Divider>Completed Todos</Divider>
          {this.state.completedList.map(todo => (
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
              <Checkbox value={todo.id} onChange={this.onChange} checked={todo.complete} />
              <div onDoubleClick={() => this.changeEditMode(todo.id)}>
                {todo.isInEditMode ? (
                  <Input
                    styles={{ width: '1000px' }}
                    autoFocus={true}
                    onBlur={e => this.onBlurValue(e, todo.id)}
                    defaultValue={todo.todoName}
                    onChange={e => this.handleTodoInputChange(e, todo.id)}
                    onPressEnter={e => this.onBlurValue(e, todo.id)}
                  />
                ) : todo.complete ? (
                  <strike>{todo.todoName}</strike>
                ) : (
                  todo.todoName
                )}
              </div>

              <Icon
                onClick={() => {
                  todo.complete ? console.log('Do nothing!') : this.onChangeStar(todo.id);
                }}
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
