import { readPrice } from "../../util/readPrice";
import { useCartStore } from "../../store/CartStore";

export default function Item({ item }) {

    const { updateQuantity, deleteItem } = useCartStore();
    
    return (
        <div className="mt-10 border-t" key={item.productName}>
            {/* <div className="text-center">
                        Aucun élément pour le moment
                    </div> */}
            <div className="flex gap-5 p-10">
                {/* Photo */}
                <div className="w-[25%]">
                    <img src={item.cartImage} alt={item.productName} />
                </div>
                <div className="w-full">
                    {/* Details */}
                    <div className="flex justify-between w-full gap-4 text-2xl">
                        {/* Product */}
                        <h2 className="font-semibold">{item.productName}</h2>

                        {/* Quantity */}
                        <div>
                            <select
                                name="quantity"
                                className="bg-transparent"
                                defaultValue={item.quantity}
                                onChange={() => updateQuantity(item.productName, event.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="text-right w-[30%]">
                            <h3 className="font-semibold">{readPrice(item.price * item.quantity)} €</h3>
                            <div className="text-sm text-gray-500">
                                <div className="mb-1">
                                    Rémunération pour copie privée incluse de
                                    14,00 €
                                </div>
                                <div>Dont éco-participation: 0,04 €</div>
                            </div>
                            <div
                                className="inline-block mt-3 text-base text-blue-500 cursor-pointer hover:text-blue-800"
                                onClick={() => deleteItem(item.productName)}
                            >
                                Supprimer
                            </div>
                        </div>
                    </div>
                    <div className="border-t mt-9 pt-9">
                        {/* Apple care plus */}
                        <div className="flex gap-3">
                            <div className="pt-1">
                                <img
                                    src="/assets/apple-care.png"
                                    alt="apple"
                                    className="w-[18px]"
                                />
                            </div>
                            <div className="flex justify-between w-full">
                                <div>
                                    <div className="text-[17px] font-semibold">
                                        AppleCare+ pour {item.productName}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Inscription automatique avec votre
                                        matériel Apple.
                                    </div>
                                    <div className="mt-1 text-sm text-gray-500">
                                        Inclut la taxe sur les primes
                                        d’assurance au taux applicable.
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[17px] font-semibold">
                                        Offert
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
