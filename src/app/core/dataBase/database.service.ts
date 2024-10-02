import { Injectable } from '@angular/core';
import { Database, ref, set, get } from '@angular/fire/database';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(private db: Database) {

    }

    // Para gravar dados
    writeUserData(userId: string, name: string, email: string) {
        set(ref(this.db, 'users/' + userId), {
            username: name,
            email: email
        });
    }

    // Para ler dados
    getUserData(userId: string) {
        const userRef = ref(this.db, 'users/' + userId);
        return get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("Nenhum dado disponível");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}