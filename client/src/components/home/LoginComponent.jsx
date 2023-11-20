
import { Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../SignUp/SignUp";

const LoginForm = () => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="User Name" className="mr-sm-2" />
      <FormControl type="text" placeholder="Password" className="mr-sm-2" />
      <Button variant="secondary">Log In</Button>
      <SignUp />
    </Form>
  );
};

export default LoginForm;
