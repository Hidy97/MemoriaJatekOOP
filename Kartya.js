class Kartya {
    #fajlNev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;

    /**id később */
    constructor(allapot, fajlNev, szuloElem) {
        //console.log(fajlNev);
        this.#allapot = allapot;
        this.#fajlNev = fajlNev;
        this.#blokkolt;

        szuloElem.append(`<div class="kartyaLap"><img src="${this.#fajlNev}"></div>`);

        this.#divElem = $(".kartyaLap:last-child");
        this.#imgElem = $(".kartyaLap:last-child img");

        //console.log(this.#imgElem);
        this.setAllapot();
        this.#imgElem.on("click", () => {
            this.#kattintasTrigger();
            this.setAllapot();
        })
    }

    setAllapot() {
        this.#allapot = !this.#allapot;
        this.#setLap();
    }

    getFajlnev() {
        return this.#fajlNev;
    }

    #setLap() {
        if (this.#allapot) {
            this.#imgElem.attr("src", "kepek/hatter.jpg");
            //this.#fajlNev = "kepek/hatter.jpg"
        }else{
            this.#imgElem.attr("src", this.#fajlNev);
        }
    }

    #kattintasTrigger() {
        const fordit = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(fordit) 
        //console.log("katt");
    }
}

export default Kartya;