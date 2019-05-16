var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];

  function aprovador(alunos, media) {
      return alunos.filter(function(aluno){
        return alunos.media >= media;
      });
    }