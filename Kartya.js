class Kartya {
    #fajlNev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;

    /**id később */
    constructor(allapot, fajlNev, szuloElem) {
        this.#allapot = allapot;
        this.#fajlNev = fajlNev;
        this.#blokkolt;

        szuloElem.append(`<div class"kartyaLap"><img src"${this.#fajlNev}"></div>`);

        this.#divElem = $(".kartyaLap:last-child");
        this.#imgElem = $(".kartyaLap img:last-child");

        this.#imgElem.on("click", () => {
            this.kattintasTrigger();
        })
    }

    setAllapot() {
        this.#allapot = !this.#allapot;
        this.setLap();
    }

    getFajlnev() {
        return this.#fajlNev;
    }

    setLap() {
        if (this.#allapot == true) {
            this.fajlNev = "hatter.jpg";
        }
    }

    kattintasTrigger() {
        const esemeny = new CustomEvent("fordít", { detail: this });
        window.dispatchEvent(esemeny)
    }
}

export default Kartya;