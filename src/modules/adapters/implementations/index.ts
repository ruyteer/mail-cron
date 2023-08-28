import { SendMailUseCases } from "../../../domain/usecases/SendMailUseCases";
import { SendMailController } from "../../app/controllers/SendMailController";
import { CronJobsRepository } from "../../repositories/CronJobsRepository";

const cronJobsRepository = new CronJobsRepository();
const sendMailUseCases = new SendMailUseCases(cronJobsRepository);
const sendMailController = new SendMailController(sendMailUseCases);

export { sendMailController };
