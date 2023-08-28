import { randomUUID } from "crypto";

export class Email {
  public readonly id: string;
  public to: string;
  public subject: string;
  public content: string;
  public date: string;

  constructor(props: Omit<Email, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}
