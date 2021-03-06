class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $("#quantidade");
        this._inputData = $("#data");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event){
      event.preventDefault();
      
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      console.log(this._listaNegociacoes);
      this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao
        (
          DateHelper.textoParaData(this._inputData.value),
          this._inputQuantidade.value,
          this._inputValor.value
        );
    }

    _limpaFormulario(){

      this._inputData.value = "";
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0,0;

      this._inputData.focus();

    }
}
