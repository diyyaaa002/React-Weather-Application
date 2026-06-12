import React from 'react';
import axios from 'axios';

function Post() {
  
  const [Data, SetData] = React.useState([]);
  const [formData, SetFormData] = React.useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleClick = (e) => {
    SetFormData({
      ...formData, 
      [e.target.name]: e.target.value 
    });
    console.log('Event', e.target.name, e.target.value); 
  };

  return (
    <div>
      <div>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleClick}
        />
        <br />
        <br />
        
        <label>Price</label>
        <input
          name="price"
          value={formData.price}
          onChange={handleClick}
        />
        <br />
        <br />
        
        <label>Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleClick}
        />
        <br />
        <br />
        
        <label>Category</label>
        <input
          name="category"
          value={formData.category}
          onChange={handleClick}
        />
        <br />
        <br />
        
        <label>Image</label>
        <input
          name="image"
          value={formData.image}
          onChange={handleClick}
        />
        <br />
        <br />
        
        <button onClick={() => {
          axios.post('https://fakestoreapi.com/products', formData)
            .then((res) => {
              console.log('Response', res.data);
            
            })
            .catch((err) => {
              console.log('Error', err);
            });
        }}>Post</button>
        
        <button onClick={() => {
          axios.put('https://fakestoreapi.com/products/3', formData)
            .then((res) => {
              console.log('Response', res.data);
            })
            .catch((err) => {
              console.log('Error', err);
            });
        }}>Update</button>
        
        <button onClick={() => {
          axios.delete('https://fakestoreapi.com/products/1')
            .then((res) => {
              console.log('Response', res.data);
            })
            .catch((err) => {
              console.log('Error', err);
            });
        }}>Delete</button>
        
        <button onClick={() => {
          axios.get('https://fakestoreapi.com/products')
            .then((res) => {
              SetData(res.data); 
            })
            .catch((err) => {
              console.log('Error', err);
            });
        }}>Get</button>
      </div>
      
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {Data && Data.length > 0 ? (
            Data.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} alt={item.title} width={50} />
                  </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5">No products available</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Post;

