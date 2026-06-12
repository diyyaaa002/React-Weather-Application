import React from 'react';
import './ProductCatalog.css';

function ProductCatalog() {
  const [item, setItem] = React.useState(0);
  const [view, setView] = React.useState('table'); // State for toggling view

  const increase = () => {
    setItem(item + 1);
  };

  const decrease = () => {
    if (item > 0) {
      setItem(item - 1);
    } else {
      alert('You are already on the least number');
    }
  };

  const products = [
    { id: 0, title: "string", price: 10, description: "A random string item." },
    { id: 1, title: "pen", price: 10, description: "A simple pen." },
    { id: 2, title: "notebook", price: 100, description: "A high-quality notebook." }
  ];

  return (
    <div>
      <center><h1>PRODUCT CATALOG</h1></center>
      <div className='main'>
        <div>
          Select your view<br />
          <button onClick={() => setView('table')}>
            TABLE
          </button><br />
          <button onClick={() => setView('grid')}>
            GRID
          </button>
        </div>

        <div id='Div1'>
          <button type="button" className="btn btn-info" onClick={increase}>+</button>
          Items: {item}
          <button type="button" className="btn btn-info" onClick={decrease}>-</button>
        </div>

        {/* Displaying products based on the selected view */}
        {view === 'table' ? (
          <div id='table-view'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div id='grid-view'>
            <div className="grid-container">
              {products.map((product) => (
                <div className="grid-item" key={product.id}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;
