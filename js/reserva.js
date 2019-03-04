var Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}

Reserva.prototype.precioBase = function () {
    return this.cantidadDePersonas * this.precioPorPersona
}

Reserva.prototype.porcentajeAdicional = function () {
    if ((this.horario.getHours() >= 13) && (this.horario.getHours() <= 14) || (this.horario.getHours() > 19) && (this.horario.getHours() < 22)) {
        if ((this.horario.getDay() === 0) || (this.horario.getDay() === 7)) {
            return 15
        }else {
            return 5
        }
    } else if ((this.horario.getDay() === 0) || (this.horario.getDay() === 7)) {
        return 10
    }
    return 0
}

Reserva.prototype.calculoDescuentos = function () {
    var muchasPersonas = 0;
    if (this.cantidadDePersonas > 8){
        muchasPersonas = 15;
    }

    if ((this.cantidadDePersonas === 7) || (this.cantidadDePersonas === 8)){
        muchasPersonas = 10;
    }

    if ((this.cantidadDePersonas >= 4) && (this.cantidadDePersonas <= 6)) {
        muchasPersonas = 5;
    }
    
    var resultado = (this.precioBase() * muchasPersonas) / 100;

    if (this.codigoDeDescuento === "DES15") {
        resultado = resultado + (this.precioBase() * 0,15)
    } else if (this.codigoDeDescuento === "DEs200") {
        resultado = resultado + 200
    } else if (this.codigoDeDescuento === "DES1") {
        resultado = resultado + this.precioPorPersona
    }
    console.log(resultado);
    return resultado
}

Reserva.prototype.precioFinal = function () {
    return this.precioBase() - this.calculoDescuentos() + (this.precioBase() - ((this.precioBase() * this.porcentajeAdicional()) / 100))
}


