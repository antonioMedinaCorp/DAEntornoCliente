class Pelicula{
    constructor(id, titulo,director,anio,pais,genero,calificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;
    }

    checkId(){
        if(this.id.match(/^[a-z]{2}\d{7}$/)){

        }
    }

    checkTitulo(){
        if(this.titulo.match(/^\w{1,100}$/)){

        }
    }

    checkAnio(){
        if(this.anio.match(/^\d{4}$/)){
            
        }
    }
}