import { ISMRepository } from "./DataTransferObject";

export interface ICronJobsRepository {
  createJob(data: ISMRepository): Promise<void>;
}
