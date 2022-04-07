function sleep(valor) {
  const minhaPromise = new Promise((resolve, reject) => {
    if (valor) {
      setTimeout(() => resolve(valor), 3000);
    } else {
      setTimeout(() => reject('ERRO!'), 3000);
    }
  });

  minhaPromise
    .then((resultado) => console.log('resultado da promise:', resultado))
    .catch((erro) => console.error(erro, 'Passe a função com algum valor'));
}
sleep(123)
