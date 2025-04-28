import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Carlos',
      sobrenome: 'Miranda',
      email: 'carlos@gmail.com',
      idade: 43,
      peso: 98,
      altura: 1.9,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
