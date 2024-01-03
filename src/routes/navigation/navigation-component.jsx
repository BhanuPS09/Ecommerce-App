import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
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
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div>
                        <CrwnLogo className="logo" />
                    </div>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">
                        Shop
                    </Link>

                    {currentState ?
                        (<span className='nav-link'  onClick={signOutUser}>SignOut</span>) :
                        (<Link className="nav-link" to="/auth">
                            SignIn
                        </Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <DropDown />}
            </div>
            <Outlet />
        </Fragment>

    );
}

export default Navigation;