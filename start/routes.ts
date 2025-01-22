import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'


const UsersController = () => import('#controllers/users_controller')
const SessionController = () => import('#controllers/session_controller')


router.get('users', [UsersController, 'index'])

router.get('/', async ({ view }) => {
  return view.render('welcome')
})

router.get('/rabico', async ({ view }) => {
  return view.render('pages/home')
})

router.get('/financeiro', async ({ view }) => {
  return view.render('pages/financeiro/index')
})


router.get('/login', async ({ view }) => {
  return view.render('login')
})
router.post('/login', [SessionController, 'login']).as('session.login')
router.post('/registrar', [SessionController, 'registrar']).as('session.registrar')


router.get('/home', async ({ view }) => {
  return view.render('home')
})



router.get('/registrar', async ({ view }) => {
  return view.render('registrar')
})

router
  .post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
  })
  .use(middleware.auth())