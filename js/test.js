const expect = chai.expect;
//var reserva = new Reserva (new Date(2019,02,24,13,30),4,500,"DES15");
//var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
var reserva = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")

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

    it("Existencia de un restaurante - La funcion chequea que exitan los 24 restaurantes", function(){
        for (let i=1; i<25; i++) { 
            resultado.push(listado.buscarRestaurante(i));
        }
        expect(resultado).to.have.lengthOf(24);
        
    });

    it("Existencia de un restaurante - La funcion chequea q se devuelva el valor que corresponde al restaurante solicitado", function(){
        for (let i=0; i<24; i++) { 
            expect(listado.restaurantes[i].nombre).to.eql(resultado[i].nombre);
        }
    })
});  

    describe("Testeando la clase Reserva" , function(){
    
       

        it("Se calcula el precio base en funcion de 4 personas y un precio base de $500", function(){
            
            var resultado = reserva.precioBase();
            expect(resultado).to.be.equal(300);
            
        });


        it("Se calcula el precio total de la reserva con 4 personas, ", function(){
            
            var resultado = reserva.precioFinal();
            expect(resultado).to.be.equal(100);
            
        });

        it("Se calcula el precio total de la reserva con 4 personas, con el adicional de horario ", function(){
            
            var resultado = precioFinal(4, 500, "ADIH");
            expect(resultado).to.be.equal(2100);
            
        });

        it("Se calcula el precio total de la reserva con 4 personas, con el adicional de fin de semana ", function(){
            
            var resultado = precioFinal(4, 500, "ADIS");
            expect(resultado).to.be.equal(2100);
            
        });
    });  

