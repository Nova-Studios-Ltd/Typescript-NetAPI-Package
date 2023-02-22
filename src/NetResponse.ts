import { HTTPStatus } from "./HTTPStatus";

export class NetResponse<T> {
  status: HTTPStatus;
  statusText: string;
  payload: T;

  constructor(status: HTTPStatus, statusText: string, payload: T) {
    this.status = status;
    this.statusText = statusText;
    this.payload = payload;
  }
}
