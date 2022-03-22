import { LoadAccountByToken, LoadAccountByTokenModel } from '../../../domain/usecases/load-account-by-token'
import { Decrypter } from '../../protocols/cryptography/decrypter'
import { LoadAccountByTokenRepository } from '../../protocols/db/account/load-account-by-token-repository'
import { AccountModel } from '../add-account/db-add-account-protocols'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (data: LoadAccountByTokenModel): Promise<AccountModel> {
    const accessToken = await this.decrypter.decrypt(data.accessToken)
    if (accessToken) {
      const account = await this.loadAccountByTokenRepository.loadByToken({ accessToken: data.accessToken, role: data.role })
      if (account) { return account }
    }
    return null
  }
}
