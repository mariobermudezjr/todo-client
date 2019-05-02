import React, { Component } from 'react';
import { Input, Tooltip, Icon, Checkbox } from 'antd';

class SectionA extends Component {
  render() {
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    return (
      <section id="Todo" className="SectionA">
        <div>
          <h2> Todo </h2>
          <Input
            placeholder="Add a to-do in 'inbox' "
            onSearch={value => console.log(value)}
            style={{ width: '100%', marginBottom: '6px' }}
            suffix={
              <div>
                <Icon type="calendar" style={{ color: 'rgba(0,0,0,.45)', paddingRight: '12px' }} />
                <Icon type="star" style={{ color: 'rgba(0,0,0,.45)' }} />
              </div>
            }
          />
          <div
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
            <Checkbox onChange={onChange}>Some Todo task #1 </Checkbox>
            <Icon type="star" style={{ color: 'rgba(0,0,0,.45)' }} />
          </div>{' '}
          <div
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
            <Checkbox onChange={onChange}>Some Todo task #2 </Checkbox>
            <Icon type="star" style={{ color: 'rgba(0,0,0,.45)' }} />
          </div>
          <div
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
            <Checkbox onChange={onChange}>Some Todo task #3 </Checkbox>
            <Icon type="star" style={{ color: 'rgba(0,0,0,.45)' }} />
          </div>
        </div>
      </section>
    );
  }
}

export default SectionA;
