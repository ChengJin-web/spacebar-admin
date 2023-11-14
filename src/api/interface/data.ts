// 字典模块
export namespace data {
  export interface ReqLoginForm {
    username: string;
    password: string;
    uuid: string;
    code: string;
  }
  export interface ResLogin {
    token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
  export interface CodeImg {
    captchaEnabled: boolean;
    img: string;
    uuid: string;
  }
}
