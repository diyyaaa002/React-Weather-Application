import React from "react";

function Practice_Session_1(props){

 return(
<div>
    <table><br/>
        <thead>
            <tr>
                <th>Name</th>
                <th>Sem</th>
            </tr>
        </thead>
        <tbody>
            { props.ProductData.map((val)=>(
                <tr>
                    <td>{val.Name}</td>
                    <td>{val.Sem}</td>
                </tr>
            ))}
        </tbody>
    </table>
    {props.Name}
    {props.Clg}
</div>
)
}
export default  Practice_Session_1