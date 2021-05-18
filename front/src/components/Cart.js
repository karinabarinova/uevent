import styled from 'styled-components';
import calcTotalPrice from '../lib/calcTotalPrice';
import CartStyles from './styles/CartStyles'
import Supreme from './styles/Supreme';
import { useUser } from './User'

const CartItemStyles = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid var(---lightGrey);
    display: grid;
    grid-template-columns: auto 1fr auto;
    img {
        margin-right: 1rem;
    }
    h3,
    p {
        margin: 0;
    }
`

function CartItem({cartItem}) {
    return <CartItemStyles>
        <img 
            width="100" 
            src={cartItem?.image ? cartItem.image : '/defaultEventPage.jfif'} 
            alt={cartItem.name}
        />
        <div>
            <h3>{cartItem.name}</h3>
            <p>{cartItem.price * cartItem.quantity}
            -
            {/* <em>{cartItem.quantity} &times; {product.price}
            each
            </em> */}
            <em>{cartItem.quantity} &times; 
            each
            </em>
            </p>
        </div>
        </CartItemStyles>
}

export default function Cart() {
    const me = useUser();
    if (!me.user.email) return null;
    return <CartStyles open>
        <header>
            <Supreme>{me.user.firstName}'s Cart</Supreme>
        </header>
        <ul>
            {/* {me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)} */}
        </ul>
        <footer>
            <p>{calcTotalPrice(me.cart)}</p>
        </footer>
    </CartStyles>
}
