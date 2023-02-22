function calcular(){
    let sb = document.getElementById('sb');
    let df = document.getElementById('df');
    let resultado = document.getElementById('resultado');

    let salario = (parseFloat(sb.value.replace('.','').replace(',','.')) / 30) * df.value;
    let terco = salario / 3;
    let taxaVariada = ''
    

    if(salario < 1302){
        taxaVariada = 7.5;
    }else if(salario < 2571.29){
        taxaVariada = 9;
    }else if(salario < 3856.94){
        taxaVariada = 12;
    }else{
        taxaVariada = 14;
    }

    let inss = taxaVariada/100 * (salario + terco);
    
    let totalDesconto = inss
    let totalReceber = (salario + terco) - totalDesconto;

    resultado.innerHTML = (`Salario bruto é: R$${salario.toFixed(2)}<br>Terço de férias: R$${terco.toFixed(2)}<br> INSS: -R$${inss.toFixed(2)} ${taxaVariada}%<br><br>Total desconto: -R$${totalDesconto.toFixed(2)}<br><br>Total a receber: R$${totalReceber.toFixed(2)}`)





}
