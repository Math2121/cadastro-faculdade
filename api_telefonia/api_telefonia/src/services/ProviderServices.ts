import { getCustomRepository } from 'typeorm'
import { ProviderRepository } from '../repositories/ProviderRepository'

interface IProviderCreate {
  employee: string;
  branch: string;
  productType: string;
  providerName: string;
  costCenter: string;
}

interface IProviderShow {
  id: string
}

class ProviderServices {

  async create({ employee, branch, productType, providerName, costCenter }: IProviderCreate) {

    const providerRepository = getCustomRepository(ProviderRepository)

    const provider = providerRepository.create({
      employee, 
      branch,
      productType,
      providerName,
      costCenter
    })

    await providerRepository.save(provider)

    return provider
  }

  async index() {
    const providerRepository = getCustomRepository(ProviderRepository)

    const provider = await providerRepository.find()

    return provider;
  }

  async delete({ id }: IProviderShow) {
    const providerRepository = getCustomRepository(ProviderRepository)

    const provider = await providerRepository.findOne({ id })

    if (!provider) {
      throw new Error('Provider id not found!!')
    }

    return await providerRepository.delete({ id })
  }

}

export { ProviderServices }