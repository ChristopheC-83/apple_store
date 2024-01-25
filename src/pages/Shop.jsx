import Button from "../components/Button/Button";
import Item from "../components/Item/Item";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readPrice } from "../util/readPrice";
import { useCartStore } from "../store/CartStore";

export default function Shop() {
  // State
  const { items } = useCartStore();

  return (
    <div className="bg-gray-apple">
      <div className="mx-auto max-w-7xl">
        <h1 className="pt-10 text-5xl font-semibold text-center">
          Le montant total de votre Panier est de{" "}
          {readPrice(
            items.reduce((acc, item) => acc + item.price * item.quantity, 0)
          )}{" "}
          €.
        </h1>
        {/* One items min */}
        {items.length !== 0 && (
          <div className="flex justify-center mt-10">
            <Button>Valider la commande</Button>
          </div>
        )}

        {/* 0 items yet */}
        {items.length === 0 && (
          <div className="flex justify-center mt-10">
            <div className="text-center">
              <div className="text-3xl font-semibold">
                Votre panier est vide
              </div>
              <div className="mt-5">
                Vous n'avez pas encore choisi d'articles.
              </div>
              <div className="mt-5">
                <Link to="/">
                  <Button>Continuer mes achats</Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Items */}
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}

        {/* Total */}
        <div className="mt-10 border-t">
          <div className="flex justify-between gap-5 p-10">
            <div className="w-[25%]"></div>
            <div className="w-full">
              <div className="flex justify-between w-full text-lg font-light">
                <div>
                  <div>Sous-total</div>
                  <div className="mt-1">Livraison</div>
                </div>
                <div className="text-right">
                  <div>{readPrice(
                      items.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                    )}{" "}
                    €</div>
                  <div>GRATUIT</div>
                </div>
              </div>
              <div className="flex justify-between pt-5 mt-5 text-xl border-t">
                <div className="font-semibold">Total</div>
                <div className="text-right">
                  <div>
                    {readPrice(
                      items.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                    )}{" "}
                    €
                  </div>
                  <div className="text-sm text-gray-500">
                    TVA de 0 € incluse
                  </div>
                </div>
              </div>
              {items.length !== 0 && (
                <div className="flex justify-end mt-10">
                  <Button large>Valider la commande</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
