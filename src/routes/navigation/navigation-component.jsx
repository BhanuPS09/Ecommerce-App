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
                        {/* <CrwnLogo className="logo" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z" fill="currentColor"></path></svg>
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