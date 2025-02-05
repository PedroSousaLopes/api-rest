import Aluno from '../models/Aluno'

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome:'pedro',
            sobrenome:"sousa",
            email:'pero@gmail.com',
            idade:12,
            peso:30,
            altura:30.2
        })
        res.json(novoAluno)
    }
}

export default new HomeController();