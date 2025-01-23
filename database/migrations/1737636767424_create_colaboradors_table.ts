import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'colaboradors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('codigo').notNullable()
      table.string('nome')
      table.string('cargo')
      table.string('salario')
      table.string('lotacao')
      table.date('data_admissao')
      table.date('data_rescisao')
      table.date('data_nascimento')
      table.string('cpf').notNullable()
      table.string('pis')
      table.string('rg')
      table.string('emissor')
      table.string('estado_civil')
      table.string('estabelecimento')
      table.string('banco')
      table.string('agencia')
      table.string('conta')
      table.string('tipo_conta')
      table.string('email').notNullable()
      table.string('jornada')
      table.string('horas_mes')
      table.string('horas_semana')
      table.string('status')
      table.string('imagem')
      table.string('matricula_contratante')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}