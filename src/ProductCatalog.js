import React from 'react'
import './ProductCatalog.css'
function ProductCatalog() {
    const[Item,SetItem]=React.useState(0)
    const Increase=()=>
        {
        SetItem(Item+1)
        }
    const Decrease =()=>
    {
    if(Item<0)
    {
        alert('you are already on least number')
    }
    else{
        SetItem(Item-1)
    }}
    let Product=[
        {id: 0,
title: "string",
price: 10,


},
{
    id: 1,
title: "pen",
price: 10,

},
{
    id: 2,
title: "notebook",
price: 100,


},
{
    id: 3,
title: "brush",
price: 1000,


}
    ]
  return (
    <div>
        <center><h1>PRODUCT CATALOG</h1></center>
        <div class='main'>
            
            </div>
<div id='Div1'>
<button type="button" class="btn btn-info" onClick={()=>{Increase()}}>+</button>
{/* <button type="button" class="btn btn-primary">Add to Cart</button> */}
Items:{Item}
<button type="button" class="btn btn-info" onClick={()=>{Decrease()}}>-</button>

</div>
<div id='Div1'>
<button type="button" class="btn btn-info" onClick={()=>{Increase()}}>+</button>
{/* <button type="button" class="btn btn-primary">Add to Cart</button> */}
 Items:{Item}
<button type="button" class="btn btn-info" onClick={()=>{Decrease()}}>-</button>


</div>
<table class="table table-success table-striped">
    <tr>
    <td>
        {/* {Product.map((val) => {
        return <div id='mydiv'>{val.key}</div>;
      })} */}
    
        </td>
        <td>
        {Product.map((Item) => {
        return <div id='mydiv'>{Item.id}</div>;
      })}
    
        </td>
        <td>
        {Product.map((Item) => {
        return <div id='mydiv'>{Item.title}</div>;
      })}
    
        </td>
        <td>
        {Product.map((Item) => {
        return <div id='mydiv'>{Item.price}</div>;
      })}
    
        </td>
        <td>

        </td>

    </tr>
    </table>
</div>
  
    
  )
}

export default ProductCatalog