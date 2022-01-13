export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Inhvalid param: ${paramName}`)
    this.name = 'InhvalidParamError'
  }
}
