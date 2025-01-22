// import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { UserService } from '#services/user_service'

@inject()
export default class UsersController {
    constructor(
        private userService : UserService
    ){}
    
    index() {
        return this.userService.all()
    }
}