import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {

    async register({ request, response }: HttpContext){
        const payload = request.body()
        try {
            const user = await User.create(payload)
            return response.status(201).json({
              message: 'User created successfully',
              data: user,
              status: 'success',
            })
          } catch (error) {
            return response.status(400).json({
              message: 'User creation failed',
              error: error.message,
              status: 'failed',
            })
          }
    }
}