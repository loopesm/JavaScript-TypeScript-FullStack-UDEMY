import Aluno from '../models/AlunoModels.js';

class HomeController {
  async index(req, res) {
    try {
      const novoALuno = await Aluno.create({
        nome: 'João Silva',
        sobrenome: 'Souza',
        email: 'H0B2K@example.com',
        idade: 20,
        peso: 70.5,
        altura: 1.75,
      });
      res.json(novoALuno);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new HomeController();
