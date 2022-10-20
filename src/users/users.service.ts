import { Injectable } from '@nestjs/common';

// Declaro el type User
export type User = any;

@Injectable()
export class UsersService {

    // Aquí añado los datos de los usuarios

    private readonly users = [
        {
            email: "test@test.com",
            password: "password"
        }
    ]

    // Método para buscar usuario
    async buscarUser(username: string): Promise<User|undefined>{
        return this.users.find(user => user.email === username)
    }
}
