import * as React from 'react'
import '../styles/login.css'

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => {};
  onDerement?: () => {};
}

function Login({name, enthusiasmLevel = 1, onIncrement, onDerement}: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a litter more enthusiasmLevel. :D')
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello { name + getExclamationMarks(enthusiasmLevel) }
      </div>
      <div>
        <button onClick={ onDerement }>-</button>
        <button onClick={ onIncrement }>+</button>
      </div>
    </div>
  );
}

export default Login;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}