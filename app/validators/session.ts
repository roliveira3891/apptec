import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        fullName: vine.string().maxLength(100).trim(),
        password: vine.string().minLength(1).trim(),
    })
)

export const loginValidator = vine.compile(
    vine.object({
        email: vine.string().email().normalizeEmail(),
        password: vine.string().minLength(1).trim(),
    })
)
