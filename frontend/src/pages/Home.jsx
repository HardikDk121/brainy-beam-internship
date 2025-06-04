import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL;

    const fetchProducts = async (apiurl) => {
      try {
        const response = await axios.get(apiurl);
        setProducts(response.data.products); // assuming API returns an array
        console.log(response.data.products); // log the type of response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts(api);
  }, []);
  return (


    <>
      <p>This is Home</p>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <div className="card bg-dark text-white">
                <img src={product.images[0]} className="card-img-top w-75 mx-auto " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/details/${product.id}`} className="btn btn-success"  >View details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  )
}

