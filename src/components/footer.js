import React, { Component } from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #303030;
  color: #fafafa;
  text-align: center;
  font-size: 12px;
  font-family: 'Lato';
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <StyledDiv className="footer">Mario Bermudez Jr © 2019</StyledDiv>
      </div>
    );
  }
}

export default Footer;
