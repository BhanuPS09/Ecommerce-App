import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {NavigationComponent,Logo,Links,NavLink} from "./navigation.styles.jsx";
import { userContext } from "../../components/context/user.context";
import { signOutUser } from "../../firebase/firebase.db";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { DropDown } from "../../components/cart-dropdown/cart-dropdown.component";
import { cartContext } from "../../components/context/cart.context";


const Navigation = () => {
    const { currentState, changeState } = useContext(userContext);
    // console.log(currentState);

    // const signOutFunc = async () => {
    //     const res = await signOutUser();
    //     changeState(null);
    // }

    const { isCartOpen } = useContext(cartContext);


    return (
        <Fragment>
            <NavigationComponent>
                <Logo to="/">
                    <div>
                        <CrwnLogo className="logo" />
                    </div>
                </Logo>

                <NavLink>
                    <Links to="/shop">
                        Shop
                    </Links>

                    {currentState ?
                        (<Links  as="span "onClick={signOutUser}>SignOut</Links>) :
                        (<Links className="nav-link" to="/auth">
                            SignIn
                        </Links>)}
                    <CartIcon />
                </NavLink>
                {isCartOpen && <DropDown />}
            </NavigationComponent>
            <Outlet />
        </Fragment>

    );
}

export default Navigation;