import { Router } from "express";
import { sendMailController } from "../../adapters/implementations";

const router = Router();

router.post("/send", (req, res) => {
  return sendMailController.createJob(req, res);
});

export { router };
