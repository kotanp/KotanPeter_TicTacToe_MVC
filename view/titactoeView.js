class ElemView{
    constructor(szuloElem){
        szuloElem.append(`<div><p></p></div>`);
        this.aktiv=true;
        this.ertek="-";
        this.Elem=szuloElem.children("div:last");
        this.pElem=this.Elem.children("p");
        this.Elem.on("click", ()=>{
        if(this.aktiv){
            this.kattintasTrigger();
            this.aktiv=false;
        }
            
        });
    }

    setAktiv(){
        this.aktiv=false;
    }

    setElem(ertek){
        this.ertek=ertek;
        this.pElem.text(ertek);
    }

    kattintasTrigger(){
        let esemeny=new CustomEvent("kattintas",{detail:this});
        window.dispatchEvent(esemeny);
    }
}

class JatekterView{
    constructor(tomb){
        const szuloElem=$("article");
        for (let index = 0; index < 9; index++) {
            tomb.push(new ElemView(szuloElem));
        }
    }
}

class InfoView{
    constructor(){
        this.kovetkezoJatekosElem=$(".kovetkezoJatekos");
        this.jatekVegeElem=$(".jatekvege");
        this.xJatekosElem=$("#Xman");
        this.oJatekosElem=$("#Oman");
        this.setKovJatekos(this.getxJatekos());
    }

    setJatekVege(szoveg){
        this.jatekVegeElem.text(szoveg);
    }

    setKovJatekos(szoveg){
        this.kovetkezoJatekosElem.text(szoveg);
    }

    getxJatekos(){
        return this.xJatekosElem.val();
    }

    getoJatekos(){
        return this.oJatekosElem.val();
    }
}