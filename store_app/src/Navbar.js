import { Link } from "react-router-dom";

const Navbar = () => {

  return(
    <>
<nav className="nav nav-pills nav-fill">
  <Link to="/menspage"  className="nav-link" id="custom-nav-link"  aria-current="page">Mens</Link>
  <Link to="/womenspage" className="nav-link" id="custom-nav-link">Womens</Link>
  <Link to="/electronics" className="nav-link" id="custom-nav-link">Electronics</Link>
  <Link to="/jewelry" className="nav-link" id="custom-nav-link" >Jewelry</Link>
</nav>
<br /> <br />
    </>
  )
}

export default Navbar;