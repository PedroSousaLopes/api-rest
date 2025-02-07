import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users)
    } catch (error) {

      return res.json(null)
    }
  }
  async show(req, res) {
    try {
      //const id = req.params.id;
      const user = await User.findByPk(req.params.id);
      return res.json(user)
    } catch (error) {
      return res.json(null)
    }
  }
  async update(req, res) {
    try {
      if (!req.params.id)
        return res.status(400.).json({
      errors:['id nao enviado']
    })
      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors:['usuario nao existe'],
        })
      }
      const novosDados = await user.update(req.body)
      return res.json(novosDados)
    } catch (error) {
      return res.json(null)
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id)
        return res.status(400.).json({
      errors:['id nao enviado']
    })
      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors:['usuario nao existe'],
        })
      }
   await user.destroy(req.body)
      return res.json(user)
    } catch (error) {
      return res.json(null)
    }
  }

}

export default new UserController();