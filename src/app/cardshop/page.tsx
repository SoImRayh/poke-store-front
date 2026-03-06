import CardDisplayComponent from "../components/CardDisplayComponent";
import { PokemonCard } from "../interfaces/Card";
import CardService from "../Services/CardService";

export default async function Home(){
    const data = await CardService.getAllCards()
    const cards = await data.json()


    return(
        <>
            <div className="btn btn-primary">Testando fortemente</div>
            <div>CardShop</div>
            {cards.map(item => (
                <CardDisplayComponent key={item.id} card={item}/>
            ))}
        </>
    )
}