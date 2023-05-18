import Kartya from "./Kartya.js";

class JatekTer {
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(kartyaLista) {
        this.#kartyaLista = kartyaLista;
        //console.log(kartyaLista);

        const szuloElem = $("article");

        for (let index = 0; index < kartyaLista.length; index++) {
            const kartya = new Kartya(false, kartyaLista[index].kep, szuloElem)

        }

        $(window).on("fordit", (event) => {
            //console.log(event.detail)
            this.#kivalasztottKartyaLista.push(event.detail);
            console.log(this.#kivalasztottKartyaLista);
            if (this.#kivalasztottKartyaLista.length == 2) {
                this.ellenorzes();
            }
        })
    }

    init() {

    }

    kever() {

    }

    ellenorzes() {
        let elsoK = this.#kivalasztottKartyaLista[0];
        let masodikK = this.#kivalasztottKartyaLista[1];
        /**
        for (let index = 0; index < this.#kivalasztottKartyaLista.length; index++) {
            const element = array[index];
            
        }
         */
        if (elsoK.getFajlnev() == masodikK.getFajlnev()) {
            console.log("Fájlnév egyezik")
        } else {
            //this.#kartyaLista[i]
            console.log("Fájlnév nem egyezik")
            setTimeout(() => {
                elsoK.setAllapot();
                masodikK.setAllapot();
            }, 1000);
        }
    }

    triggerBlocked() {
        const triggerBlocked = new CustomEvent("triggerBlocked", { detail: this });
        window.dispatchEvent(triggerBlocked)
        //console.log("katt");
    }

    triggerUnblocked() {
        const triggerUnblocked = new CustomEvent("triggerUnblocked", { detail: this });
        window.dispatchEvent(triggerUnblocked)
        //console.log("katt");
    }
}

export default JatekTer;