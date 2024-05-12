import renderer from 'react-test-renderer';
import React, { useState, useEffect } from "react";

import Modal from "../Modal";
import { Link } from "react-router-dom";
import Explore from "../Explore";

jest.mock("./ExploreStyles.css");
jest.mock("./Modal");
jest.mock("react-router-dom");

const renderTree = tree => renderer.create(tree);
describe('<Explore>', () => {
  it('should render component', () => {
    expect(renderTree(<Explore 
    />).toJSON()).toMatchSnapshot();
  });
  
});