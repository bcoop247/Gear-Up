import { Cart3 } from 'react-bootstrap-icons';

const CartIcon = (props) => {
  const user = props;

  return (
    <div className="container">
    <p>{user.username}</p>
      <button className="btn position-absolute top-0 end-0 mt-3 me-3"> 
  
    <Cart3 className="custom-cart-icon"></Cart3> 
  </button>


       
</div>
  )
}

export default CartIcon;