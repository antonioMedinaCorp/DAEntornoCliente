class Pelicula{
    constructor(id, titulo,director,anio,pais,genero,calificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;
        
        checkId(id);
        checkTitulo(titulo);
        checkAnio(director);

    }

}


function checkId(id){
    if(this.id.match(/^[a-z]{2}\d{7}$/)){
        document.write('ole ole ta bien')
    }
    else{
        document.write('mu mal un 3')
    }
}

function checkTitulo(titulo){
    if(this.titulo.match(/^\w{1,100}$/)){

        document.write('ole ole ta bien')
    }
    else{
        document.write('mu mal un 3')
    }
}

function checkAnio(anio){
    if(this.anio.match(/^\d{4}$/)){
        
        document.write('ole ole ta bien')
    }
    else{
        document.write('mu mal un 3')
    }
}

var pelicula1 = new Pelicula(
    
);