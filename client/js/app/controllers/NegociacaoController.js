class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $("#quantidade");
        this._inputData = $("#data");
        this._inputValor = $("#valor");
    }

    adiciona(event){
      event.preventDefault();
      this.convertData();

      let negociacao = new Negociacao(
        this.convertData(),
        this._inputQuantidade.value,
        this._inputValor.value
      );

      console.log(negociacao);

    }

    convertData(){
      return new Date(
                 ...this._inputData.value
                        .split("-")
                        .map((item, indice) => item - (indice % 2))
                )
    }

}
