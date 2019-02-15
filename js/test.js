const expect = chai.expect;

describe("Testeando la clase Restaurant" , function(){

    const restaurante2 = listadoDeRestaurantes[2];
    it("reservar Horario existente", function(){
        //La funcion debe eliminar un horario del array horarios
        restaurante2.reservarHorario("11:30");
        expect(restaurante2.horarios.length).to.equal(2);
    });

    it("Reservar Horario inexitente", function(){
        //La funcion no debe eliminar nada del array
        restaurante2.reservarHorario("11:30");
        expect(restaurante2.horarios.length).to.equal(2);
    });

    it("Reservar Horario String Vacío", function(){
        //La funcion no debe eliminar nada del array
        restaurante2.reservarHorario("");
        expect(restaurante2.horarios.length).to.equal(2);
    });

    it("Calculo de promedio", function(){
        //se verifica que si el array no es vacío se calcula el promedio
        restaurante2.calificaciones = [2,2,2];
        if (restaurante2.calificaciones.length != 0){
        expect(restaurante2.obtenerPuntuacion()).to.equal(2);
        }
    });

    it("Calificacion en Cero", function(){
        //se verifica que si el array es vacío la calificación es Cero
        restaurante2.calificaciones = [];
        expect(restaurante2.obtenerPuntuacion()).to.equal(0);
    });

    it("Agregar calificación valida al Restaurante", function(){
        //Se recorren todos los valores posibles y se chequea que se agrega la calificación
        restaurante2.calificaciones = [];
        for (i=0;i<20;i++) {
            if (restaurante2.calificar(i)) {
            const calificaciones = restaurante2.calificaciones.push(i);  
            } 
        }
        expect(restaurante2.calificaciones.length).to.eql(9);
    });

    it("Chequeo que Calificación no sea string vacío", function(){
        //Se chequea que no sea un string vacío 
        expect(restaurante2.calificar("")).to.eql(undefined);
    });

    it("Chequeo que Calificación no sea string", function(){
        //Se chequea que no sea un string   
        expect(restaurante2.calificar("a")).to.eql(undefined);
    });
});