import React, { useState } from "react";

function App() {
  const [resultado, setResultado] = useState("");

  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.name));
  }

  const clear = () => {
      setResultado("");
  }

  return (    
    <div className="App">      
      <form>
        <input type="text" value={resultado}/>
      </form>    

      <div>
        <div>
          <button className="botao-limpa-e-apaga" onClick={clear}>AC</button>
          <button className="botao-limpa-e-apaga" onClick={clear}>X</button>
          <button className="botao-azul" name = "/" onClick={handleClick}>/</button>
          <button className="botao-azul" name = "*" onClick={handleClick}>*</button>
        </div>

        <div>                       
          <button className="botao-restante" name = "7" onClick={handleClick}>7</button>
          <button className="botao-restante" name = "8" onClick={handleClick}>8</button>
          <button className="botao-restante" name = "9" onClick={handleClick}>9</button>
          <button className="botao-azul" name = "-" onClick={handleClick}>-</button>    
        </div>

        <div>
          <button className="botao-restante" name = "4" onClick={handleClick}>4</button>
          <button className="botao-restante" name = "5" onClick={handleClick}>5</button>
          <button className="botao-restante" name = "6" onClick={handleClick}>6</button>
          <button className="botao-azul" name = "+" onClick={handleClick}>+</button>  
        </div>

        <div>
           <button className="botao-restante" name = "1" onClick={handleClick}>1</button>
          <button className="botao-restante" name = "2" onClick={handleClick}>2</button>
          <button className="botao-restante" name = "3" onClick={handleClick}>3</button>  
          <button className="botao-resultado" name = "=" onClick={handleClick}>=</button>        
        </div>

        <div>
          <button id="zero" className="botao-restante" name = "0" onClick={handleClick}>0</button>
          <button className="botao-restante" name = "." onClick={handleClick}>.</button>           
        </div>

        </div>
    </div>
  );
}

export default App;
