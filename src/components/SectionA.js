import React, { Component } from 'react';
import { Input, Icon, Checkbox } from 'antd';

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

function sortByCompleted(array) {
  let sortedArray = [];

  array.forEach(element => {
    if (element.complete === false) {
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
    todoValue: '',
    previousTodo: ''
  };

  componentDidMount() {
    this.setState({ todoList: sortByCompleted(sortByPriority(dummyData)) });
  }

  // When box is checked off
  onChange(e) {
    if (e.target.checked === true) {
      this.alerts();
    }
    // const updatedList = this.state.todoList.map(item => {
    //   if (item.id === e.target.value) {
    //     item.complete = !item.complete;
    //   }
    //   return item;
    // });
    const updatedList = this.state.todoList.filter(item => item.id !== e.target.value);

    this.setState({ todoList: sortByCompleted(sortByPriority(updatedList)) });
  }

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

    this.setState({ todoList: sortByCompleted(sortByPriority(updatedList)) });
  }

  // Add a todo list item
  onAddTodo(e) {
    const updatedList = this.state.todoList;
    updatedList.push({
      id: this.state.todoList.length + 1,
      todoName: e.target.value,
      dueDate: '05/06/19',
      important: '',
      complete: false,
      isInEditMode: false
    });

    this.setState({ todoList: sortByCompleted(sortByPriority(updatedList)), todoValue: '' });
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
