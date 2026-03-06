'use client';

import { PokemonCard } from "../interfaces/Card"

type Displayparams = {
    card: PokemonCard
}

export default function CardDisplayComponent({ card }: Displayparams) {


    const modal = (
        <dialog id={card.id + "_modal"} className="modal">
            <div className="modal-box">

                <h2 className="text-xl font-bold flex justify-between">
                    {card.name}
                    <span>{card.hp} HP</span>
                </h2>

                <p className="text-xs opacity-80 mb-3">{card.flavorText}</p>

                {card.abilities?.length > 0 && (
                    <>
                        <div className="divider divider-neutral text-xs">Abilities</div>
                        {card.abilities.map((ability, i) => (
                            <div key={i} className="text-sm mb-2">
                                <span className="font-semibold">{ability.name}</span>
                                <p className="text-xs">{ability.text}</p>
                            </div>
                        ))}
                    </>
                )}

                {card.attacks?.length > 0 && (
                    <>
                        <div className="divider divider-neutral text-xs">Attacks</div>
                        {card.attacks.map((attack, i) => (
                            <div key={i} className="text-sm mb-2">
                                <div className="flex justify-between">
                                    <span className="font-semibold">{attack.name}</span>
                                    <span>{attack.damage}</span>
                                </div>
                                <p className="text-xs">{attack.text}</p>
                            </div>
                        ))}
                    </>
                )}

                <div className="divider divider-neutral text-xs">Info</div>

                <div className="flex flex-wrap gap-2 text-xs">
                    <div className="badge badge-outline">{card.types ? card.types.join(", ") : null}</div>
                    <div className="badge badge-outline">{card.rarity}</div>
                    <div className="badge badge-outline">{card.artist}</div>
                </div>

            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )

    return (
        <>
            <div onClick={() => document.getElementById(card.id + "_modal").showModal()}>
                {modal}
                {/* Imagem */}
                <div className="hover-3d">
                    {/* content */}
                    <figure className="w-60 rounded-2xl">
                        <img src={card.images.large} alt={card.name} />
                    </figure>
                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}