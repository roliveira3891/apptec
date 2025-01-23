// import type { HttpContext } from '@adonisjs/core/http'

import Colaboradors from "#models/colaboradors";
import { HttpContext } from "@adonisjs/core/http";

export default class ColaboradorsController {
    async index({request, view} : HttpContext){
        const dados = await Colaboradors.findManyBy('status','ativo')
       
        return view.render('pages/colaborador/index',{
            dados: dados
        })
    }

    async cadastro({request, params, view} : HttpContext){
        const { tipo } = request.all()
        const id = params.id
        const readonly = tipo==='edit' ? '' : 'readonly'
        let dados = await Colaboradors.find(id)
        
        return view.render('pages/colaborador/cadastro',{
            id: id,
            readonly: readonly,
            dados: dados
        })
    }
}