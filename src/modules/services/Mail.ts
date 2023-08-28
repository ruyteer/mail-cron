import { transport } from "../../config/transporterConfig";
import { ISMRepository } from "../adapters/interfaces/DataTransferObject";

export async function sendMail(data: ISMRepository) {
  transport.sendMail(
    {
      from: process.env.MAIL_USER,
      to: data.to,
      subject: data.subject,
      html: data.content,
    },
    (e) => {
      if (e) {
        console.log(e);
      }

      console.log("Email as sended!");
    }
  );
}
