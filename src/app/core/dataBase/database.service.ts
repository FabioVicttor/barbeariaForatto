import { Injectable } from '@angular/core';
import { Database, ref, set, get, child } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: Database) { }

  // Função para escrever dados no Realtime Database
  async writeData(path: string, data: any) {
    const dbRef = ref(this.db, path);
    try {
          await set(dbRef, data);
          return console.log('Dados gravados com sucesso!');
      } catch (error) {
          return console.error('Erro ao gravar dados: ', error);
      }
  }

  // Função para ler dados do Realtime Database
  async readData(path: string) {
    const dbRef = ref(this.db);
    return get(child(dbRef, path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log('Nenhum dado disponível');
          return null;
        }
      })
      .catch((error) => console.error('Erro ao ler dados: ', error));
  }
}