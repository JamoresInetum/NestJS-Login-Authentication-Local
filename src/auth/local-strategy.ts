import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    // Le inyectamos el authService
    constructor(private authService: AuthService) {
        super()
    }

    // Como único método tenemos el validar
    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validarUser(username, password);

        //Puede haber errores si no encuentra el user
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
