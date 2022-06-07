import { Request, response, Response } from 'express'
import { ProviderServices } from '../services/ProviderServices'

class ProviderController {

  async create(request: Request, response: Response) {
    const { employee, branch, productType, providerName, costCenter } = request.body

    const providerServices = new ProviderServices()


    try {
      const provider = await providerServices.create({ employee, branch, productType, providerName, costCenter })
      return response.json(provider)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const providerServices = new ProviderServices()

    try {
      const provider = await providerServices.index()
      return response.json(provider)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const providerServices = new ProviderServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const provider = await providerServices.delete({ id })
      return response.json({ message: 'provider id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

}

export { ProviderController }

