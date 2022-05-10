import { AccountModel } from '@/domain/models/account'
import { LoadAccountByTokenModel } from '@/domain/usecases/load-account-by-token'

export interface LoadAccountByTokenRepository {
  loadByToken (data: LoadAccountByTokenModel): Promise<AccountModel>
}
