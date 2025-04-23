const Services = require('./Services.js');

class PessoaService extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);

    // Mixin para consulta de matrículas
    const listaMatriculas = await estudante.getAulasMatriculadas();

    return listaMatriculas;
  }
}

module.exports = PessoaService;