dineroCofla = prompt('¿Cuanto dinero tienes Cofla?');
dineroRoberto = prompt('¿Cuanto dinero tienes Roberto?');
dineroPedro = prompt('¿Cuanto dinero tienes Pedro?');

dineroCofla =  parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, debe comprar el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1  && dineroCofla < 1.6) {
    alert("Cofla, debe comprar el helado de crema")
    alert("y te sobran" + (dineroCofla - 1))
}

else if (dineroCofla >= 1.6  && dineroCofla < 1.7) {
    alert("Cofla, debe comprar el helado de yogurt")
    alert("y te sobran" + (dineroCofla - 1.6))
}

else if (dineroCofla >= 1.7  && dineroCofla < 1.8) {
    alert("Cofla, debe comprar el helado gourmet")
    alert("y te sobran " + (dineroCofla - 1.7))
}

else if (dineroCofla >= 1.8  && dineroCofla < 2.9) {
    alert("Cofla, debe comprar el helado de leche")
    alert("y te sobran" + (dineroCofla - 1.8))
}

else if (dineroCofla >= 2.9) {
    alert('Cofla, debe comprar el helado combinado o pote de 1/4Kg')
    alert("y te sobran " + (dineroCofla - 2.9))
} else {
    alert('Cofla, no le alcanza para ningún helado')
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, debe comprar el helado de agua")
}

else if (dineroRoberto >= 1  && dineroRoberto < 1.6) {
    alert("Roberto, debe comprar el helado de crema")
}

else if (dineroRoberto >= 1.6  && dineroRoberto < 1.7) {
    alert("Roberto, debe comprar el helado de yogurt")
}

else if (dineroRoberto >= 1.7  && dineroRoberto < 1.8) {
    alert("Roberto, debe comprar el helado gourmet")
}

else if (dineroRoberto >= 1.8  && dineroRoberto < 2.9) {
    alert("Roberto, debe comprar el helado de leche")
}

else if (dineroRoberto >= 2.9) {
    alert('Roberto, debe comprar el helado combinado o pote de 1/4Kg')
} else {
    alert('Roberto, no le alcanza para ningún helado')
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, debe comprar el helado de agua")
}

else if (dineroPedro >= 1  && dineroPedro < 1.6) {
    alert("Pedro, debe comprar el helado de crema")
}

else if (dineroPedro >= 1.6  && dineroPedro < 1.7) {
    alert("Pedro, debe comprar el helado de yogurt")
}

else if (dineroPedro >= 1.7  && dineroPedro < 1.8) {
    alert("Pedro, debe comprar el helado gourmet")
}

else if (dineroPedro >= 1.8  && dineroPedro < 2.9) {
    alert("Pedro, debe comprar el helado de leche")
}

else if (dineroPedro >= 2.9) {
    alert('Pedro, debe comprar el helado combinado o pote de 1/4Kg')
} else {
    alert('Pedro, no le alcanza para ningún helado')
}
