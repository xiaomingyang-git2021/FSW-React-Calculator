import React, { useState } from 'react';
import Button from './button/Button';
import comma from './comma/Comma';
import './App.css';

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);

    if(content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if(content === "±") {
      if(num) {
        setValue((num * -1).toString());
        return;
      } 
    }

    if(content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if(content === ".") {
      if(value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if(content === "+") {
      if(operator !== null) {
        if(operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if(operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }

    if(content === "-") {
      if(operator !== null) {
        if(operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if(operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0"); 
      setOperator("-");
      return;
    }

    if(content === "x") {
      if(operator !== null) {
        if(operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if(operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("x");
      return;
    }

    if(content === "÷") {
      if(operator !== null) {
        if(operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if(operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if(content === "=") {
      if(!operator) return;

      if(operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "-") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "x") {
        setValue((memory * parseFloat(value)).toString());
      } else if(operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if(value[value.length-1] === ".") {
      setValue(value + content);
    } else {
      setValue((parseFloat(num + content)).toString());
    }
  }


  return (
    <div className="App">
      <div className="display">{comma(value)}</div>
      <div className="buttons">
        <Button 
          onButtonClick={handleButtonPress} 
          content="AC" 
          type="function"
        />
        <Button onButtonClick={handleButtonPress} content="±" type="function"/>
        <Button onButtonClick={handleButtonPress} content="%" type="function"/>
        <Button onButtonClick={handleButtonPress} content="÷" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="7"/>
        <Button onButtonClick={handleButtonPress} content="8"/>
        <Button onButtonClick={handleButtonPress} content="9"/>
        <Button onButtonClick={handleButtonPress} content="x" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="4"/>
        <Button onButtonClick={handleButtonPress} content="5"/>
        <Button onButtonClick={handleButtonPress} content="6"/>
        <Button onButtonClick={handleButtonPress} content="-" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="1"/>
        <Button onButtonClick={handleButtonPress} content="2"/>
        <Button onButtonClick={handleButtonPress} content="3"/>
        <Button onButtonClick={handleButtonPress} content="+" type="operator"/>
        <Button onButtonClick={handleButtonPress} content="0"/>
        <Button onButtonClick={handleButtonPress} content="."/>
        <Button onButtonClick={handleButtonPress} content="=" type="operator"/>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
