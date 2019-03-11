const expect = chai.expect;


describe("Testeando la clase Restaurant" , function(){

    const restaurante2 = listadoDeRestaurantes[2];  

    it("reservar Horario existente - La funcion debe eliminar un horario del array horarios", function(){
        //La funcion debe eliminar un horario del array horarios
        restaurante2.reservarHorario("11:30");
        expect(restaurante2.horarios).to.include("12:00","22:30").but.not.include("11:30");
    });

    it("Reservar Horario inexitente - La funcion no debe eliminar nada del array", function(){
        //La funcion no debe eliminar nada del array
        restaurante2.reservarHorario("11:30");
        expect(restaurante2.horarios.length).to.equal(2);
    });

    it("Reservar Horario String Vacío - La funcion no debe eliminar nada del array", function(){
        //La funcion no debe eliminar nada del array
        restaurante2.reservarHorario("");
        expect(restaurante2.horarios.length).to.equal(2);
    });

    it("Calculo de promedio - se verifica que si el array no es vacío se calcula el promedio", function(){
        //se verifica que si el array no es vacío se calcula el promedio
        restaurante2.calificaciones = [10,10,10];
        if (restaurante2.calificaciones.length != 0){
        expect(restaurante2.obtenerPuntuacion()).to.equal(10);
        }
    });

    it("Calificacion en Cero - se verifica que si el array es vacío la calificación es Cero", function(){
        //se verifica que si el array es vacío la calificación es Cero
        restaurante2.calificaciones = [];
        expect(restaurante2.obtenerPuntuacion()).to.equal(0);
    });

    it("Agregar calificación valida al Restaurante - Se recorren todos los valores posibles y se chequea que se agrega la calificación", function(){
        //Se recorren todos los valores posibles y se chequea que se agrega la calificación
        restaurante2.calificaciones = [];
        for (i=0;i<20;i++) {
            if (restaurante2.calificar(i)) {
            const calificaciones = restaurante2.calificaciones.push(i);  
            } 
        }
        expect(restaurante2.calificaciones.length).to.eql(10);
    });

    it("Chequeo que Calificación no sea string vacío - Se chequea que no sea un string vacío ", function(){
        //Se chequea que no sea un string vacío 
        expect(restaurante2.calificar("")).to.eql(undefined);
    });

    it("Chequeo que Calificación no sea string - Se chequea que no sea un string", function(){
        //Se chequea que no sea un string   
        expect(restaurante2.calificar("a")).to.eql(undefined);
    });
});

describe("Testeando la clase Listado" , function(){
    let resultado = [];
    var listado2 = new Listado(listadoDeRestaurantes)

    it("Existencia de un restaurante - La funcion chequea que exitan los 24 restaurantes", function(){
        for (let i=1; i<25; i++) { 
            resultado.push(listado2.buscarRestaurante(i));
        }
        expect(resultado).to.have.lengthOf(24);
        
    });

    it("Existencia de un restaurante - La funcion chequea q se devuelva el valor que corresponde al restaurante solicitado", function(){
        for (let i=0; i<24; i++) { 
            expect(listado2.restaurantes[i].nombre).to.eql(resultado[i].nombre);
        }
    })
});  

    describe("Testeando la clase Reserva" , function(){
    
        it("Se calcula el precio base en funcion de 4 personas y un precio base de $500", function(){
            var reserva = new Reserva (new Date(2019,1,24,14,30),4,500,"DES15");
            var resultado = reserva.precioBase();
            expect(resultado).to.be.equal(2000);
            
        });


        it("Se calcula el precio total de la reserva con 3 personas, precio de $500, hora pico y dia pico (24 de febrero de 2019) y descuento de $200", function(){
            var reserva = new Reserva (new Date(2019,1,24,13,30),3,500,"DES200");
            var resultado = reserva.precioFinal();
            expect(resultado).to.be.equal(1525);
            
        });

        it("Se calcula el precio total de la reserva con 10 personas, horario y dia normal, sin ningun descuento adicional", function(){
            var reserva = new Reserva (new Date(2019, 6, 29, 11, 00), 10, 500, "nada")
            var resultado = reserva.precioFinal();
            expect(resultado).to.be.equal(4250);
            
        });

        it("Se intenta generar una reserva con 0 personas ", function(){
            var reserva = new Reserva (new Date(2019, 6, 29, 11, 00), 0, 500, "nada")
            var resultado = reserva.precioFinal();
            expect(resultado).to.be.equal(0);
            
        });
    });  

