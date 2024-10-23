import { db } from '../config/firebase';
import { setDoc, doc, getDoc, updateDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';

class Compra {
  constructor(id, dataCompra, dataEmissao, dataEnvio, projeto_id, fornecedor_id, cliente_id, produto_id, valorTotal) {
    this.id = id;
    this.dataCompra = dataCompra;
    this.dataEmissao = dataEmissao;
    this.dataEnvio = dataEnvio;
    this.projeto_id = projeto_id; 
    this.fornecedor_id = fornecedor_id; 
    this.cliente_id = cliente_id; 
    this.produto_id = produto_id;
    this.valorTotal = valorTotal;
  }

  static async create(compraData) {
    const docRef = doc(collection(db, 'compras')); // Cria referência para um novo documento
    await setDoc(docRef, { ...compraData, id: docRef.id }); // Salva os dados da compra
    return { id: docRef.id, ...compraData }; // Retorna os dados com o novo ID
  }

  static async getById(id) {
    const docRef = doc(db, 'compras', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw new Error('Compra não encontrada');
    }
    const data = docSnap.data();
    return new Compra(
      docSnap.id,
      data.dataCompra,
      data.dataEmissao,
      data.dataEnvio,
      data.projeto_id,
      data.fornecedor_id,
      data.cliente_id,
      data.produto_id,
      data.valorTotal
    );
  }

  static async update(id, updateData) {
    const docRef = doc(db, 'compras', id);
    await updateDoc(docRef, updateData);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return new Compra(
      docSnap.id,
      data.dataCompra,
      data.dataEmissao,
      data.dataEnvio,
      data.projeto_id,
      data.fornecedor_id,
      data.cliente_id,
      data.produto_id,
      data.valorTotal
    );
  }

  static async delete(id) {
    const docRef = doc(db, 'compras', id);
    await deleteDoc(docRef);
    return { message: 'Compra deletada com sucesso' };
  }

  static async getAll() {
    const snapshot = await getDocs(collection(db, 'compras'));
    const compras = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      compras.push(new Compra(
        docSnap.id,
        data.dataCompra,
        data.dataEmissao,
        data.dataEnvio,
        data.projeto_id,
        data.fornecedor_id,
        data.cliente_id,
        data.produto_id,
        data.valorTotal
      ));
    });
    return compras;
  }
}

export default Compra;
