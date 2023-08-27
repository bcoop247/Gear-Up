export function validateCardNumber(cardNumber) {
  // Use a regular expression to match a valid card number format
  const cardNumberRegex = /^[0-9]{16}$/;
  return cardNumberRegex.test(cardNumber);
}

// Function to validate name on card
export function validateNameOnCard(nameOnCard) {
  // Name on card should be at least 2 characters
  return nameOnCard.length >= 2;
}

// Function to validate expiration year
export function validateExpirationYear(expirationYear) {
  // Expiration year should be a 4-digit number in the future
  const currentYear = new Date().getFullYear();
  const expirationYearInt = parseInt(expirationYear);
  return (
    expirationYearInt >= currentYear && expirationYearInt <= currentYear + 10
  );
}

// Function to validate expiration month
export function validateExpirationMonth(expirationMonth) {
  // Expiration month should be between 1 and 12
  const expirationMonthInt = parseInt(expirationMonth);
  return expirationMonthInt >= 1 && expirationMonthInt <= 12;
}

// Function to validate CVV
export function validateCVV(cvv) {
  // CVV should be a 3 or 4-digit number
  const cvvRegex = /^[0-9]{3,4}$/;
  return cvvRegex.test(cvv);
}
