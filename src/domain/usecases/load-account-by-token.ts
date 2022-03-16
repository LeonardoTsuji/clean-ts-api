import { AccountModel } from '../models/account'

export interface LoadAccountByTokenModel {
  accessToken: string
  role?: string
}

export interface LoadAccountByToken {
  load (data: LoadAccountByTokenModel): Promise<AccountModel>
}
