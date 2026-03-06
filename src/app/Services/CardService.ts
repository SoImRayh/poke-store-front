import { deflate } from "zlib"

class CardService {

    constructor (){}

    public getAllCards(){
        return fetch("http://localhost:8081/api/card/get")
    }
}

export default new CardService()