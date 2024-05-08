import { useState } from 'react';
import { signInWithEmailAndPassword } from '@/firebase/auth';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    const user = await signInWithEmailAndPassword(email, password);
    if (user.error) {
      setError(user.error);
    } else {
      // Redirect or perform other actions after successful sign in
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;