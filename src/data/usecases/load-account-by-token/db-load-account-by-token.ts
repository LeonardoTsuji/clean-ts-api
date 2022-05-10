import { AccountModel } from '@/domain/models/account'
import { LoadAccountByToken, LoadAccountByTokenModel } from '@/domain/usecases/load-account-by-token'
import { Decrypter } from '@/data/protocols/cryptography/decrypter'
import { LoadAccountByTokenRepository } from '@/data/protocols/db/account/load-account-by-token-repository'

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
