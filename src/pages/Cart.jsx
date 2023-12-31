import React from "react";
import ContinueShoppingButton from "../Components/Cart/ContinueShoppingButton";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";
import CartList from "../Components/Cart/CartList";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  // console.log(cartItems);

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="m-auto flex w-3/4 max-w-screen-lg flex-col py-24">
        <div className="flex items-center justify-between">
          <h2 className="my-10 text-left text-3xl font-semibold uppercase text-slate-800">
            Carrito
          </h2>

          <ContinueShoppingButton />
        </div>

        {cartItems.length > 0 ? <CartList /> : <EmptyCart />}
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <h2 className="my-10 text-center text-lg font-semibold text-slate-800">
      Tu carrito está vacío
    </h2>
  );
}

export default Cart;
