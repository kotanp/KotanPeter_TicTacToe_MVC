class tttController{
    constructor(){
        let tttTomb=[];
        const infoView=new InfoView();
        new JatekterView(tttTomb);
        const tttModel=new TTTModel(tttTomb);
        let lepes=0;
       $(window).on("kattintas", (event)=>{   
        if(lepes%2==0){
            event.detail.setElem("X");
            let jatekos=infoView.getoJatekos();
            infoView.setKovJatekos(jatekos+" következik");
        }
        else{
            event.detail.setElem("O");
            let jatekos=infoView.getxJatekos();
            infoView.setKovJatekos(jatekos+" következik");
        }
        lepes++;
        let allapot=tttModel.getEllenorzes();
        if(allapot=="X"){
            let jatekos=infoView.getxJatekos();
            jatekVege(jatekos+" nyert");
        }else if(allapot=="O"){
            let jatekos=infoView.getoJatekos();
            jatekVege(+jatekos+" nyert");
        }
        else if(lepes==9){
            jatekVege("Döntetlen");
        }
       });

       function jatekVege(szoveg){
           tttTomb.forEach(elem=>{
            elem.setAktiv();
           });
           infoView.setJatekVege(szoveg);
       }
    }
}