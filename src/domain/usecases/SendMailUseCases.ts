import { ISendMailDTO } from "../../modules/adapters/interfaces/DataTransferObject";
import { ICronJobsRepository } from "../../modules/adapters/interfaces/Repositories";
import { dateConverter } from "../../utils/dateConverter";
import { Email } from "../entities/Email";

export class SendMailUseCases {
  constructor(private cronJobsRepository: ICronJobsRepository) {}

  async sendMail(data: ISendMailDTO): Promise<void> {
    if (
      !data.content ||
      !data.date ||
      !data.hour ||
      !data.subject ||
      !data.to
    ) {
      throw new Error("Please, fill in all required fields!");
    }

    const convertedDate = dateConverter(data.date, data.hour);

    const mailJob = new Email({
      content: data.content,
      date: convertedDate,
      subject: data.subject,
      to: data.to,
    });

    await this.cronJobsRepository.createJob(mailJob);
  }
}
