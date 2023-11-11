import { useEffect } from "react";
import Home from "../components/home";
import { withRouter } from "../hooks/useRouter";

const Main = (props) => {
  useEffect(() => {
    //Future use
  }, []);

  return (
    <div className="main-body">
      <Home></Home>
    </div>
  );
};

export default withRouter(Main);
