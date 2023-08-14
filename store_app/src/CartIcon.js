import { Cart3 } from 'react-bootstrap-icons';

const CartIcon = () => {
  return (
    <div className="container">
 
  <button className="position-absolute top-0 end-0 mt-3 me-3"> 
    <Cart3 className="custom-cart-icon"></Cart3> 
  </button>
       
</div>
  )
}

export default CartIcon;