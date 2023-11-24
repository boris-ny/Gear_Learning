import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return function ProtectedRoute(props) {
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      fetch("http://localhost:6000/checkToken")
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          setRedirect(true);
        });
    }, []);

    if (loading) {
      return null;
    }
    if (redirect) {
      return <Redirect to="/login" />;
    }
    return <ComponentToProtect {...props} />;
  };
}
