import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    // Le inyecto el UsersService
    constructor(private usersService: UsersService){}

    /**
     * Método validar user, busca entre los datos guardados coincidencias con los parámetros
     * @param username de tipo string
     * @param password de tipo string
     */
    async validarUser(username:string, password:string):Promise<any>{
        const user = await this.usersService.buscarUser(username);

        if(user && user.password === password){
            const {password, ...result} = user
            return result
        }
        return null;
    }
}
