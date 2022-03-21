import { LoadAccountByToken, LoadAccountByTokenModel } from '../../../domain/usecases/load-account-by-token'
import { Decrypter } from '../../protocols/cryptography/decrypter'
import { AccountModel } from '../add-account/db-add-account-protocols'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (private readonly decrypter: Decrypter) {}

  async load (data: LoadAccountByTokenModel): Promise<AccountModel> {
    await this.decrypter.decrypt(data.accessToken)
    return null
  }
}
