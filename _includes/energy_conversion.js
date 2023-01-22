h  = 6.62607015e-34;
c  = 299792458;
e  = 1.60217663e-19;
ei = 6.24150909e18;
hc = 1239.841987427397;
hci= 1/(h*c);

function round(num){
    output = (Math.round(num*1000))/1000;
return(num.toFixed(3));
}

function meVconvert(){
    with(document.conversion){
        K.value  = round(meV.value * 11.6045180925782);
        cm.value = round(1E-5  * meV.value * e / (h * c));
        nm.value = round(1E12  * h * c / (e * meV.value) );
        THz.value= round(1E-15 * meV.value * e / h);
    }
}

function Kconvert(){
    with(document.conversion){
        meV.value  = round(K.value / 11.6045180925782);
        cm.value =   round(1E-5  * K.value * e / (h * c * 11.6045180925782));
        nm.value = round(1E12  * 11.6045180925782 * h * c / (e * K.value) );
        THz.value= round(1E-15 * K.value * e / h / 11.6045180925782);
    }
}