function listaAprovados()
{
    let aprovados = avaliacoes
    .filter(prova => prova.nota >= 7 )
    .map(prova => prova.aluno.nome);

    console.log(aprovados)
}

function dobraNumeros(){
  let numeros = [3, 2, 11, 20, 8, 7]

  let numerosImparesDobrados = numeros.map(item => item * ((item % 2) + 1))

  console.log(numeros);
  console.log(numerosImparesDobrados);

}
