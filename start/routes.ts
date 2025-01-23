import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')
const SessionController = () => import('#controllers/session_controller')
const ColaboradorsController = () => import('#controllers/colaboradors_controller')

//Usuarios
router.get('users', [UsersController, 'index'])
//Fim Usuarios

//Financeiro
router.get('/financeiro', async ({ view }) => {
  return view.render('pages/financeiro/index')
})
//Fim Financeiro

//Session
router.get('/login', async ({ view }) => {
  return view.render('login')
})
router.post('/login', [SessionController, 'login']).as('session.login')
router.post('/registrar', [SessionController, 'registrar']).as('session.registrar')
router.get('/registrar', async ({ view }) => {
  return view.render('registrar')
})
router.post('logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  return response.redirect('/login')
}).use(middleware.auth())
//Fim Session

//Colaborador
router.get('/colaborador/cadastro/:id', [ColaboradorsController, 'cadastro']).as('colaborador.cadastro')
router.get('/colaborador', [ColaboradorsController, 'index']).as('colaborador.index')
//Fim Colaborador




router.get('/', async ({ view }) => {
  return view.render('login')
})

router.get('/home', async ({ view }) => {
  return view.render('home')
})







