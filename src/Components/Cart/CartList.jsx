import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, deleteItem } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import CountSelector from "./CountSelector";

const CartList = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <ul role="list" className="m-6 divide-y divide-gray-200">
        {cartItems.map(
          ({
            id,
            colorSelected,
            sizeSelected,
            countSelected,
            images,
            name,
            price,
            idCartItem,
          }) => (
            <li
              key={`${id}-${colorSelected}-${sizeSelected}`}
              className="flex items-center py-6"
            >
              <Link
                to={`../product/${id}`}
                className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border-transparent p-2 shadow-md shadow-stone-300"
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="max-h-full max-w-full object-cover object-center"
                />
              </Link>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <div className="w-1/4 ">
                      <h3 className="mb-4">
                        <Link to={`../product/${id}`}>{name}</Link>
                      </h3>
                      <p className="mt-1 text-sm font-normal text-gray-500">
                        Color: {colorSelected}
                      </p>
                      <p className="mt-1 text-sm font-normal text-gray-500">
                        Talle: {sizeSelected}
                      </p>
                    </div>
                    <div className="flex w-1/4 items-center justify-center text-sm">
                      <CountSelector itemData={{idCartItem, countSelected}} />
                      <div className="mx-4 flex"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>{`U$D ${price}`}</p>
                      <button
                        type="button"
                        className="pt-8 font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => {
                          dispatch(deleteItem(idCartItem));
                        }}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-lg font-medium text-gray-900">
          <p>Subtotal</p>
          <p>
            U$D{" "}
            {cartItems
              .reduce(
                (prevValue, currentValue) =>
                  prevValue + currentValue.price * currentValue.countSelected,
                0
              )
              .toFixed(2)}
          </p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Envío e impuestos calculados al finalizar compra.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="my-10 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-sky-800 px-6 py-3 text-base font-medium text-white shadow-md shadow-sky-700 hover:bg-sky-900"
          >
            Finalizar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartList;
