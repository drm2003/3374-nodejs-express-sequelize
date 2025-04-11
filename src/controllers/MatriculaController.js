const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaService.js');

const matriculaServices = new MatriculaServices();

class MatriculaControler extends Controller {
  constructor(){
    super(matriculaServices);
  }
}

module.exports = MatriculaControler;