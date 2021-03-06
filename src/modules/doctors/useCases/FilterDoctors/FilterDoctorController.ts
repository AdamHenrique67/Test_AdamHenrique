import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IFilterDoctorDTO } from '../../dtos/IFilterDoctorDTO';
import { FilterDoctorUseCase } from './FilterDoctorUseCase';

class FilterDoctorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, crm, landline, cellPhone }: IFilterDoctorDTO = request.query;

    const filterDoctorUseCase = container.resolve(FilterDoctorUseCase);

    const all = await filterDoctorUseCase.execute({
      name,
      crm,
      landline,
      cellPhone,
    });

    return response.json(all);
  }
}

export { FilterDoctorController };
