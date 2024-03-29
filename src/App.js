import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation-component.jsx";
import Auth from "./routes/Auth/Auth.component.jsx";
import {Shop} from "./routes/shop/shop.component.jsx";
import {CheckOut} from "./routes/checkout/checkout.component.jsx";
import {Success} from "./components/success/success-component.jsx"
import { Failure } from "./components/failure/failure-component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="success" element={<Success/>}/>
        <Route path="failure" element={<Failure/>}/>
        <Route path="auth" element={<Auth />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>

    </Routes>
  );

}

export default App;