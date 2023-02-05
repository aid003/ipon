import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartIcon from "../Card/CardIcon";
import styles from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCardButton;
