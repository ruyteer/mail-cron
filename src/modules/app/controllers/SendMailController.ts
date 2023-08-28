import { Request, Response } from "express";
import { SendMailUseCases } from "../../../domain/usecases/SendMailUseCases";

export class SendMailController {
  constructor(private sendMailUseCases: SendMailUseCases) {}

  async createJob(req: Request, res: Response) {
    const { date, hour, to, subject, content } = req.body;

    try {
      await this.sendMailUseCases.sendMail({
        date,
        hour,
        content,
        subject,
        to,
      });

      res.send();
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
