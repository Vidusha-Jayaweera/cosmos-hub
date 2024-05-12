import renderer from 'react-test-renderer';
import { useState, useEffect } from "react";
import ApodItem from "../ApodItem";
import axios from "axios";
import Apod from "../Apod";

jest.mock("./ApodItem");
jest.mock("axios");

const renderTree = tree => renderer.create(tree);
describe('<Apod>', () => {
  it('should render component', () => {
    expect(renderTree(<Apod 
    />).toJSON()).toMatchSnapshot();
  });
  
});