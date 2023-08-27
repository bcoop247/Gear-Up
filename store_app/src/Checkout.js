import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { validateCardNumber, validateNameOnCard, validateExpirationMonth, validateExpirationYear, validateCVV } from "./ValidateCard";
import { useShoppingCart } from "./ShoppingCartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// WHY CANT IT FIND THIS??
import visaMasterCardLogo from './images/visaMastercard.png';

const Checkout = () => {
  const apiBaseURL = "http://localhost:3500";
  const navigate = useNavigate();
  const { total } = useShoppingCart();
  const [errorMessage, setErrorMessage] = useState(null);
  const [userData, setUserData] = useState({});
  const [creditCardNumber, setCreditCardNumber ] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [cvv, setCvv] = useState('');
  
  const handleMonthChange = (e) => { setSelectedMonth(e.target.value) };
  const handleYearChange = (e) => { setSelectedYear(e.target.value) };
  const handleCardNumber = (e) => { setCreditCardNumber(e.target.value) };
  const handleCardHolderName = (e) => { setCardHolderName(e.target.value) };
  const handleCvv = (e) => { setCvv(e.target.value) };

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userData' || 'newUserData'));
    
    if(storedUserInfo){
      setUserData(storedUserInfo);
    }
    else{
      setUserData(null);
    }
    }, []);

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    const paymentInfo = {creditCardNumber, cardHolderName, selectedMonth, selectedYear, cvv};
    const customerID = userData.id;
    const postData = {custID: customerID, ...paymentInfo};
   

if(
  validateCardNumber(creditCardNumber) &&
  validateNameOnCard(cardHolderName) &&
  validateExpirationMonth(selectedMonth) &&
  validateExpirationYear(selectedYear) &&
  validateCVV(cvv)
){
    try{
      const response = await fetch(`${apiBaseURL}/paymentdetails`, {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(postData),
      });
      if(response.ok){
        console.log("Payment Successful");
        navigate('/paymentsuccess')     
      }
    }
    catch(error){
      console.log("Error submitting payment information");
    }
  }
else{
  setErrorMessage('Invalid payment infomation. Please check and try again');
  console.log('Invalid payment information');
  }

}
return (
  <>
    <Logo />
    <br /> <br />
    <Link to="/login">
      <button type="button"className="btn position-absolute top-0 start-0 mt-3 ms-3" id="homeButton"> Back
      </button>
    </Link>
    <div className="d-flex align-items-center justify-content-center">
      <img src={visaMasterCardLogo} alt="visaMastercardLogo" className="container img-fluid" style={{ width: '30%', maxWidth: '150px' }} />
    </div>
    
    <div className="container col-sm-6 justify-content-center align-items-center paymentInformation">
      
    <h1 className="container text-center" id="pageHeaders">Total: ${total}</h1>
      <form className="d-flex flex-column align-items-center" onSubmit={handleSubmitPayment}>
        <label htmlFor="cardNumber" className="form-label"></label>
        <input type="text"
          id="cardNumber"
          name="cardNumber"
          className="form-control"
          placeholder="Card Number"
          style={{ width: "50%" }}
          onChange={handleCardNumber}
          value={creditCardNumber}
          required
        />
        <br />
        <input type="text"
          id="cardHolderName"
          name="cardHolderName"
          className="form-control"
          placeholder="Name on Card"
          style={{ width: "50%" }}
          onChange={handleCardHolderName}
          value={cardHolderName}
          required
        />
        <br />
        <label htmlFor="month" className="form-label" />
        <select id="cardExpirationSelection" className="form-select" name="month" style={{ width: "50%" }} onChange={handleMonthChange} value={selectedMonth}>
          <option value="">Expiration Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">Septemeber</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <br />
        <label htmlFor="year" className="form-label" />
        <select id="cardExpirationSelection" className="form-select" name="year" style={{ width: "50%" }} onChange={handleYearChange} value={selectedYear}>
          <option value="">Expiration Year</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
        </select>
        <br />

        <input type="text"
          id="cardNumber"
          name="cardNumber"
          className="form-control"
          placeholder="C v v"
          style={{ width: "50%" }}
          onChange={handleCvv}
          value={cvv}
          required
        />
        <br />
        <div className="mb-3">
         <button type="submit" className="btn" id="homeButton">Submit
         </button> 
        </div>
        
      </form>
      
      {errorMessage && <p className="error-message" id="errorMessage"> {errorMessage} </p>}
    </div>
    </>
  )
}

export default Checkout;