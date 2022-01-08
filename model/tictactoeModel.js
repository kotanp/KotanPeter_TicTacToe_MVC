class TTTModel{
    //leelenőrzi hogy x vagy o nyert-e
    constructor(tomb){
        this.tomb=tomb;
    }

    getEllenorzes(){
        let txt =this.getVizszintesEllenorzes()+this.getFuggolegesEllenorzes()+this.getatloEllnorzes();
        let allapot="";
        if(txt.indexOf("XXX")>=0){
            allapot="X";
        }
        if(txt.indexOf("OOO")>=0){
            allapot="O";
        }

        return allapot;
    }

    getVizszintesEllenorzes(){
        let ellenorzoString="";
        this.tomb.forEach((element,index) => {
            ellenorzoString+=element.ertek;
            if(index%3==2){
                ellenorzoString+="|";
            }
        });
        return ellenorzoString;
    }

    getFuggolegesEllenorzes(){
        let ellString="";
        for (let index = 0; index < 3; index++) {
            ellString+=this.tomb[index].ertek+this.tomb[index+3].ertek+this.tomb[index+6].ertek+"|";
            
        }
        return ellString;
    }

    getatloEllnorzes(){
        let ellString="";
        ellString+=this.tomb[0].ertek+this.tomb[4].ertek+this.tomb[8].ertek+"|";
        ellString+=this.tomb[2].ertek+this.tomb[4].ertek+this.tomb[6].ertek+"|";
        return ellString;
    }
}