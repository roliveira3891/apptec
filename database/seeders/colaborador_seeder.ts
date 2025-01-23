import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Colaboradors from '#models/colaboradors'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Colaboradors.createMany([
      {
        nome : 'Renato',
        cargo : 'Cargo',
        salario : '2000',
        lotacao : 'B2B',
        data_admissao : DateTime.fromISO('2020-06-02'),
        data_rescisao : DateTime.fromISO('2020-06-02'),
        data_nascimento : DateTime.fromISO('2020-06-02'),
        cpf : '123',
        pis : '123',
        rg : '1234',
        emissor : 'SSPP',
        estado_civil : 'Casado',
        estabelecimento : 'Tecnico',
        banco : '001',
        agencia : '111',
        conta : '1111',
        tipo_conta : '111',
        email : '111@ass.com',
        jornada : '220',
        horas_mes : '220',
        horas_semana : '22',
        status : 'ativo',
        imagem : '',
        matricula_contratante: '80000'
      }
    ])
  }
}