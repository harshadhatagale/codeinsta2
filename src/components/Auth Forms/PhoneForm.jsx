import { useState } from 'react';
import { signInWithPhoneNumber } from '../firebase/auth';

const PhoneForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [error, setError] = useState('');

  const handleSignInWithPhoneNumber = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(phoneNumber);
      setVerificationId(confirmationResult.verificationId);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
      <button onClick={handleSignInWithPhoneNumber}>Send Verification Code</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default PhoneForm;