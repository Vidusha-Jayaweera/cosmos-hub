import renderer from 'react-test-renderer';
import React, { Component } from "react";
import MarsImage from "../MarsImage";
import MarsRover from "../MarsRover";

import MarsGenerator from "../Mars";

jest.mock("./MarsImage");
jest.mock("./MarsRover");
jest.mock("./MarsStyles.css");

const renderTree = tree => renderer.create(tree);
describe('<MarsGenerator>', () => {
  it('should render component', () => {
    expect(renderTree(<MarsGenerator 
    />).toJSON()).toMatchSnapshot();
  });
  
});