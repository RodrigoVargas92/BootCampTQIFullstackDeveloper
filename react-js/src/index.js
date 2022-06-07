import React from "react";
import ReactDOM  from "react-dom";
import "./styles.css"

function PrimeiroJsx(){
    return(
        <div className="teste">
            Rodrigo de Vargas - Introdução ao ReactJS
        </div>
    )
}

const App =()=>{
    return(
    <div className="App">{PrimeiroJsx()}</div>
    )
}
const rootElement = document.getElementById("root")
ReactDOM.render (<App/>, rootElement)
