import { ISMRepository } from "../adapters/interfaces/DataTransferObject";
import { ICronJobsRepository } from "../adapters/interfaces/Repositories";
import cron from "node-cron";
import { sendMail } from "../services/Mail";

export class CronJobsRepository implements ICronJobsRepository {
  async createJob(data: ISMRepository): Promise<void> {
    cron.schedule(data.date, () => {
      sendMail(data);
    });
  }
}
