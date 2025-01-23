import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'

export default class Colaboradors extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare codigo: number

  @column()
  declare nome: string

  @column()
  declare cargo: string

  @column()
  declare salario: string

  @column()
  declare lotacao: string

  @column.dateTime()
  declare data_admissao: DateTime

  @column.dateTime()
  declare data_rescisao: DateTime

  @column.dateTime()
  declare data_nascimento: DateTime

  @column()
  declare cpf: string

  @column()
  declare pis: string

  @column()
  declare rg: string

  @column()
  declare emissor: string

  @column()
  declare estado_civil: string

  @column()
  declare estabelecimento: string

  @column()
  declare banco: string

  @column()
  declare agencia: string

  @column()
  declare conta: string

  @column()
  declare tipo_conta: string

  @column()
  declare email: string

  @column()
  declare jornada: string

  @column()
  declare horas_mes: string

  @column()
  declare horas_semana: string

  @column()
  declare status: string

  @column()
  declare imagem: string

  @column()
  declare matricula_contratante: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


  @beforeCreate()
  public static async setCodigo(colaboradors: Colaboradors) {
    const lastRecord = await Colaboradors.query().orderBy('codigo', 'desc').first()
    colaboradors.codigo = lastRecord ? lastRecord.codigo + 1 : 1
  }

  public getDataAdmissao(tipo: string): string | null {
    if (!tipo) {
      return this.data_admissao ? this.data_admissao?.toFormat('dd/MM/yyyy') : null
    } else {
      return this.data_admissao ? this.data_admissao?.toFormat('yyyy-MM-dd') : null
    }
  }

  public getDataRescisao(tipo: string): string | null {
    if (!tipo) {
      return this.data_rescisao ? this.data_rescisao?.toFormat('dd/MM/yyyy') : null
    } else {
      return this.data_rescisao ? this.data_rescisao?.toFormat('yyyy-MM-dd') : null
    }
  }

  public getDataNascimento(tipo: string): string | null {
    if (!tipo) {
      return this.data_nascimento ? this.data_admissao?.toFormat('dd/MM/yyyy') : null
    } else {
      return this.data_nascimento ? this.data_admissao?.toFormat('yyyy-MM-dd') : null
    }
  }

}