import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleOauthGuard } from './guards';
import { AuthService } from './auth.service';
import { User } from './decorators';
import { registerDTO } from './dto';
import{decamelizeKeys} from 'humps'
import { JwtAuthGuard } from './guards/jwt-auth.guards';


@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Get('google')
    @UseGuards(GoogleOauthGuard)
    async oauth(){}


    @Get('google/callback')
    @UseGuards(GoogleOauthGuard)
    async googleAuthCallback(@User() user){
        
        const userDto:registerDTO = {
            username:'',
            email:user.email,
            profile_picture:user.picture
        }

        const accessToken = await this.authService.signIn(userDto);
        return decamelizeKeys({accessToken});
    }

    
}
