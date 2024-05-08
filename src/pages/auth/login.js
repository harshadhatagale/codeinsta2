import LoginForm from "@/components/Auth Forms/LoginForm";
import {signUpWithEmailAndPassword} from  "../../firebase/auth"
const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;