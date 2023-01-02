import React from "react"

export default function jsx4(){
const sub = "Estou no JavaScript!"
    return (
 <div>


 <h1>Integraçao js e jsx</h1>
 <h2>{sub}</h2>
 <h3>{3 * 3}</h3>
 <h4>{Math.max(13,39)}</h4>
 <h5>{entre(30,1,10)}</h5>
 </div>
)


}

function entre(valor,min,max){
    if (valor >= min && valor  <= max){
        return "sim"
    }
    else{
        return "nao"
    }
}