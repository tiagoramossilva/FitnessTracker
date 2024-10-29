const Estoque = require('../models/Estoque');

class EstoqueController {
  static async create(req, res) {
    try {
      const estoqueData = req.body;
      const novoEstoque = await Estoque.create(estoqueData);
      res.status(201).json(novoEstoque);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const estoque = await Estoque.getById(req.params.id);
      res.status(200).json(estoque);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const estoqueAtualizado = await Estoque.update(req.params.id, req.body);
      res.status(200).json(estoqueAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const response = await Estoque.delete(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const estoques = await Estoque.getAll();
      res.status(200).json(estoques);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EstoqueController;
