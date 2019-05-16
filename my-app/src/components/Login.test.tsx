import * as enzyme from 'enzyme';
import * as React from 'react';
import Login from './Login';

it('renders ths correct text when no enthusiasm level is given', () => {
  const login = enzyme.shallow(<Login name='Daniel' />)
  expect(login.find(".greeting").text()).toEqual('login Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const login = enzyme.shallow(<Login name='Daniel' enthusiasmLevel={1}/>);
  expect(login.find(".greeting").text()).toEqual('Login Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const login = enzyme.shallow(<Login name='Daniel' enthusiasmLevel={5} />);
  expect(login.find(".greeting").text()).toEqual('Login Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Login name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Login name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});