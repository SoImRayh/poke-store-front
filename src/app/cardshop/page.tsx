import CardDisplayComponent from "../components/CardDisplayComponent";
import { PokemonCard } from "../interfaces/Card";
import CardService from "../Services/CardService";
import { card } from "../cards";
import Navbar from "../components/Navbar";
export default async function Home() {
    //const data = await CardService.getAllCards()
    //const cards = await data.json()




    return (
        <div>
            <div>
                Coleção 
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {card.map((item, index) => {
                    return (<CardDisplayComponent key={"card_display_" + index} card={item} />)
                })}
            </div>
        </div>
    )
}