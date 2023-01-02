import React from "react";

function gerarlista( final =20){
const lista =[]
for ( let i= 1; i<= final; i++){
 lista.push(<span>{i},</span>)
    
}
return lista
     
}

export default function lista3(){
return(
<div>
<div>
{gerarlista(20)}

</div>

<div>
{gerarlista(3)}

</div>
</div>
)

}