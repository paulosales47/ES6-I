class DateHelper{

    constructor()
    {
        throw new Error('DateHelper não pode ser instanciada');
    }
    
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getUTCFullYear()}`;
    }

    static textoParaData(texto){
        if(this._verificaFormatoData(texto))
            return new Date(... texto.split('-').map((item, indice) => item - (indice % 2)));

        throw new Error('A data deve estar no formato aaaa-mm-dd');        
    }

    static _verificaFormatoData(texto)
    {
        return (/^\d{4}-\d{2}-\d{2}/.test(texto))
    }

}