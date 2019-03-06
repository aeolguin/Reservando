
//Aquí se colocan los distintos tipos de descuentos para las reservas

var descuentos = {
    //descuentos por cantidad de personas
    mayorA8 : 15,
    entre7Y8 : 10,
    entre4Y6 : 5,

    //descuentos adicionales por código
    DES15 : function () {
        return (reserva.precioBase() * 0.15)
    },
    DES200 : 200,
    DES1 : function () {
    return reserva.precioPorPersona
    }
};
