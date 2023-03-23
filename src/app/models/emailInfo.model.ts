export enum MailType {
  CONFIRM = 1,
  CANCEL,
  REMINDER,
  DEPOSIT,
  CARDDETAILS,
}

export interface EmailInfo {
  logo?: string;
  image?: string;
  mailType?: MailType;
  title?: string;
  text?: string;
  titleGr?: string;
  textGr?: string;
}
