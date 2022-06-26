
import classes from "./Cart.module.css";

function Cart() {


      return (
        <>
        <div className={classes.QuantitySelector}>
          <button className={classes.Current}>-</button>
          <input className={classes.Current}/>
          <button className={classes.Current}>+</button>
        </div> 
        <br></br>
        <button className={classes.anButton}><span>Delete</span><span>Delete</span></button>
        </>
      );
    };


export default Cart;