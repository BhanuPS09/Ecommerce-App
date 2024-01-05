import "./failure-styles.scss";
import { Link } from "react-router-dom";

export const Failure = () => {
  return (
    <div className="failure-container">
      <h2>Payment failed</h2>
      <br/>
      <Link to="/checkout">
        <h3>Retry <i class="ri-repeat-fill"></i></h3>
      </Link>
    </div>
  );
};
