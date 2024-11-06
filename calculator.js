import { useState } from 'react';

function calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculation = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); 
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return { input, result, calculation };
}

export default calculator;
