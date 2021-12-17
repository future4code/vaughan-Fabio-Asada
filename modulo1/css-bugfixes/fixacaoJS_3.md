ˋˋˋ
function calculaNota(ex, p1, p2) {
  const pesoProva1 = p1 * 2;
  const pesoProva2 = p2 * 3;
  const media= (ex + pesoProva1 + pesoProva2) / 6;

    if(media >= 9){
        return "A";
    }else if(media >= 7.5){
        return "B";
    }else if(media >= 6){
        return 'C';
    }else{
        return 'D';
    };
};

ˋˋˋ