
import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/session'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
    async login({request, auth, response}: HttpContext){
        const { email, password } = await request.validateUsing(loginValidator)
      

        const user = await User.verifyCredentials(email, password)
       
        await auth.use('web').login(user)
        // await auth.use('web').login(
        //     user,
        //     !!request.input('remember_me')
        //   )
        response.redirect('/home')
    }

    async registrar({request, response}: HttpContext){
        const data = await request.validateUsing(registerValidator)
        const user = await User.create(data)
        return response.redirect('/login')
    }

    
}