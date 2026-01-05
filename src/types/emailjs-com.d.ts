declare module 'emailjs-com' {
  export interface EmailJSResponse {
    text: string;
    status: number;
  }

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement | string,
    publicKey: string
  ): Promise<EmailJSResponse>;

  export function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, unknown>,
    publicKey?: string
  ): Promise<EmailJSResponse>;
}
