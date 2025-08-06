import { HTTPStatus } from "./HTTPStatus";

/**
 * Wrapper class for HTTP response data.
 *
 * @template T
 */
export class NetResponse<T> {
  /**
   * HTTP status code of the response.
   * @type {HTTPStatus}
   */
  status: HTTPStatus;

  /**
   * HTTP status text describing the response.
   * @type {string}
   */
  statusText: string;

  /**
   * The parsed response body of type T.
   * @type {T}
   */
  payload: T;

  /**
   * Creates an instance of NetResponse.
   *
   * @param {HTTPStatus} status - The HTTP status code for the response.
   * @param {string} statusText - The HTTP status text for the response.
   * @param {T} payload - The payload, parsed from response, of generic type T.
   */
  constructor(status: HTTPStatus, statusText: string, payload: T) {
    this.status = status;
    this.statusText = statusText;
    this.payload = payload;
  }
}
