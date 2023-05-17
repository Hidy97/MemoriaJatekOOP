import Kartya from "./Kartya.js";

class JatekTer{
    #kartyaLista;
    #kivalasztottKartyaLista;

    constructor(kartyaLista){
        this.#kartyaLista = kartyaLista;
        this.#kivalasztottKartyaLista;

        const szuloElem = $("article");

        for (let index = 0; index < kartyaLista.length; index++) {
            const kartya = new Kartya(false, kartyaLista[index].kep, szuloElem)
            
        }

        $(window).on("fordít", (event) => {
            this.#kivalasztottKartyaLista.push(event.detail);
            //console.log(this.#kivalasztottKartyaLista);
        })
    }

    init();
    kever();
    ellenorzes();
    triggerBlocked();
    triggerUnblocked();    
}

export default JatekTer;