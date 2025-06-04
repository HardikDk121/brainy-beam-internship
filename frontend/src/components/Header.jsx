import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid bg-dark text-white " >
        <Link className="navbar-brand text-info" to="/">Eshope</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-info " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/contact">Contact us </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/products">Products </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

