import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError";
import { IDoctorsRepository } from "../../repositories/IDoctorRepository"


@injectable()
class DeleteDoctorUseCase{
    constructor(
        @inject("DoctorsRepository")
        private doctorsRepository: IDoctorsRepository,
    ){}

    async execute(id: string): Promise<void>{

        const DoctorFound = await this.doctorsRepository.findById(id);

        if(!DoctorFound){
            throw new AppError("Doctor doesn't exist!")
        }

        await this.doctorsRepository.softDelete(DoctorFound);
    }
}

export{ DeleteDoctorUseCase }