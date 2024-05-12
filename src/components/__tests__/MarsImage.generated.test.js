import renderer from 'react-test-renderer';
import React, { Component } from "react";

import MarsImage from "../MarsImage";

const renderTree = tree => renderer.create(tree);
describe('<MarsImage>', () => {
  it('should render component', () => {
    expect(renderTree(<MarsImage 
    />).toJSON()).toMatchSnapshot();
  });
  
});