import {z} from 'zod'

export const registerSchema=z.object({
    username: z.string({
        required_error: 'Usuario requerido'
    }).min(1,{
        message: 'El usuario debe tener mínimo un caracter'
    }),
    email:z.string({
        required_error: 'Email requerido'
    }).email({
        message: 'Email no valido'
    }),
    password:z.string({
        required_error: 'Contraseña requerida'
    }).min(6,{
        message: 'La contraseña debe tener mínimo 6 caracteres'
    }),
})