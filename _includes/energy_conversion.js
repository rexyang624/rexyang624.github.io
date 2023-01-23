h  = 6.62607015e-34;
c  = 299792458;
e  = 1.60217663e-19;
ei = 6.24150909e18;
hc = 1239.841987427397;
hci= 1/(h*c);

function round(num){
    output = (Math.round(num*100000000))/100000000;
return(output.toFixed(8));
}

function meVconvert(){
    with(document.convert){
        K.value  = round(meV.value * 11.6045180925782);
        J.value  = round(1E3 * meV.value * e * 1E16);
        cm.value = round(1E-5  * meV.value * e / (h * c));
        nm.value = round(1E12  * h * c / (e * meV.value));
        THz.value= round(1E-15 * meV.value * e / h);
    }
}

function Kconvert(){
    with(document.convert){
        meV.value= round(K.value / 11.6045180925782);
        J.value  = round(1E3 * K.value * e / 11.6045180925782 * 1E16);
        cm.value = round(1E-5  * K.value * e / (h * c * 11.6045180925782));
        nm.value = round(1E12  * 11.6045180925782 * h * c / (e * K.value) );
        THz.value= round(1E-15 * K.value * e / h / 11.6045180925782);
    }
}

function Jconvert(){
    with(document.convert){
        meV.value  = round(J.value * 1E-19 / e );
        K.value    = round(J.value * 1E-19 / e  * 11.6045180925782);
        cm.value = round(1E-5  * J.value * 1E-19 / (h * c));
        nm.value = round(1E12  * h * c / (J.value * 1E-19) );
        THz.value= round(1E-15 * J.value * 1E-19 / h);
    }
}

function cmconvert(){
    with(document.convert){
        meV.value= round(cm.value * 1E5 / e * (h * c));
        K.value  = round(cm.value * 1E5 / e * (h * c) * 11.6045180925782);
        nm.value = round(1E7 / (cm.value) );
        THz.value= round(1E-10 * cm.value * c);
    }
}

function nmconvert(){
    with(document.convert){
        meV.value= round(1E12  * h * c / (e * nm.value));
        K.value  = round(1E12  * h * c / (e * nm.value) * 11.6045180925782);
        J.value  = round(1E31  * h * c / nm.value);
        cm.value = round(1E7 / nm.value);
        THz.value= round(1E-3 * c / nm.value);
    }
}

function THzconvert(){
    with(document.convert){
        meV.value= round(1E15 * THz.value * h / e);
        K.value  = round(1E15 * THz.value * h / e * 11.6045180925782);
        J.value  = round(1E18 * THz.value * h * 1E16);
        cm.value = round(1E10 * THz.value / c);
        nm.value = round(1E-3 * c / THz.value);
    }
}