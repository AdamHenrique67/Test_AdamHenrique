import ApiNodeCorreios from 'node-correios';
import { AppError } from '@shared/errors/AppError';
import { ICreateCepDTO } from '@modules/cep/dtos/ICreateCepDTO';
import { ICepProvider } from '@modules/cep/providers/cepProvider/model/ICepProvider';

class CepProvider implements ICepProvider {
  async getAddress(cep: string): Promise<ICreateCepDTO> {
    const correios = new ApiNodeCorreios();

    const address = await correios.consultaCEP({ cep });

    if (address.erro) {
      throw new AppError('Cep does not exist');
    }

    return address as ICreateCepDTO;
  }
}

export { CepProvider };
