import { inject, injectable } from "tsyringe";
import { Specialty } from "../../infra/typeorm/entities/specialty";
import { ISpecialtiesRepository } from "../../repositories/ISpecialtiesRepository";




@injectable()
class ListSpecialtyUseCase {
    constructor(
        @inject("SpecialtiesRepository")
        private specialtiesRepository: ISpecialtiesRepository
    ){}

    async execute(): Promise<Specialty[]> {
        const specialties = await this.specialtiesRepository.list();

        return specialties;
    }
}

export { ListSpecialtyUseCase };