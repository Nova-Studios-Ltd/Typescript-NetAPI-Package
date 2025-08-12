/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyValue, Payload } from "Types";
import { NetResponse } from "./NetResponse";

/**
 * NetAPI provides basic REST methods for making HTTP calls to an API endpoint.
 *
 * Each static method returns a wrapped NetResponse containing the result, status and message.
 */
export class NetAPI {
  private static DEFAULT_DOMAIN = "";
  private static DEFAULT_HEADERS = {} as KeyValue;

  /**
   * Sets the default domain (base URL) for API calls.
   * @param {string} domain - The default domain to use for endpoints that do not start with 'http'.
   */
  static SetDefaultDomain(domain: string) {
    this.DEFAULT_DOMAIN = domain;
  }

  /**
   * Sets the default HTTP headers for every API call.
   * @param {KeyValue} headers - The headers as a key-value object.
   */
  static SetDefaultHeaders(headers: KeyValue) {
    this.DEFAULT_HEADERS = headers;
  }

  /**
   * Parses a JSON string payload into an object of type T.
   * If parsing fails, returns the original string as T type.
   *
   * @template T
   * @param {string} json - The payload string to parse.
   * @returns {T} The parsed payload as object or the raw payload as T.
   * @private
   */
  private static ParsePayload<T>(json: string): T {
    if (json === "") return "" as T;
    let data = undefined;
    try {
      data = JSON.parse(json);
    } catch {
      return json as T;
    }

    if (typeof data === "object" && data !== null) {
      return data as T;
    }
    return "" as T;
  }

  /**
   * Performs a GET request.
   *
   * @template T
   * @param {string} endpoint - API endpoint or URL.
   * @param {number} [timeout=-1] - Optional timeout in milliseconds, -1 for no timeout.
   * @param {KeyValue} [headers] - Optional HTTP headers.
   * @returns {Promise<NetResponse<T | undefined>>} Resolves with the NetResponse.
   */
  static async GET<T>(endpoint: string, timeout: number = -1, headers?: KeyValue | undefined): Promise<NetResponse<T | undefined>> {
    const resp = await fetch((endpoint.startsWith("http")) ? endpoint : `${this.DEFAULT_DOMAIN}/${endpoint}`, {
      method: "GET",
      headers: { ...this.DEFAULT_HEADERS, ...headers },
      signal: timeout === -1 ? null : AbortSignal.timeout(timeout)
    });

    if (resp.status !== 200) return new NetResponse<undefined>(resp.status, resp.statusText, undefined);

    if (resp.headers.get("Content-Type") === "application/octet-stream")
      return new NetResponse<T>(resp.status, resp.statusText, new Uint8Array(await resp.arrayBuffer()) as any);
    return new NetResponse<T>(resp.status, resp.statusText, NetAPI.ParsePayload<T>(await resp.text()));
  }

  /**
   * Prepares the request body payload based on type (string, FormData, or undefined).
   *
   * @param {Payload} payload - The payload to send (string or array of file buffers).
   * @returns {string | FormData | undefined} The value to use for request body.
   * @private
   */
  private static PreparePayload(payload: Payload): string | FormData | undefined {
    let finalPayload: string | FormData | undefined = undefined;
    if (typeof payload === "string") finalPayload = payload;
    else if (payload !== undefined) {
      const formData = new FormData();
      payload.forEach((buf) => formData.append("file", buf.payload, buf.name));
      finalPayload = formData;
    }
    return finalPayload;
  }

  /**
   * Performs a POST request.
   *
   * @template T
   * @param {string} endpoint - API endpoint or URL.
   * @param {Payload} [payload] - Payload/body to send (string or file array).
   * @param {number} [timeout=-1] - Optional timeout in milliseconds, -1 for no timeout.
   * @param {KeyValue} [headers] - Optional HTTP headers.
   * @returns {Promise<NetResponse<T | undefined>>} Resolves with the NetResponse.
   */
  static async POST<T>(endpoint: string, payload?: Payload, timeout: number = -1, headers?: KeyValue | undefined): Promise<NetResponse<T | undefined>> {
    const resp = await fetch((endpoint.startsWith("http")) ? endpoint : `${this.DEFAULT_DOMAIN}/${endpoint}`, {
      method: "POST",
      headers: { ...this.DEFAULT_HEADERS, ...headers },
      body: this.PreparePayload(payload),
      signal: timeout === -1 ? null : AbortSignal.timeout(timeout)
    });

    if (resp.status !== 200) return new NetResponse<undefined>(resp.status, resp.statusText, undefined);

    if (resp.headers.get("Content-Type") === "application/octet-stream")
      return new NetResponse<T>(resp.status, resp.statusText, new Uint8Array(await resp.arrayBuffer()) as any);
    return new NetResponse<T>(resp.status, resp.statusText, NetAPI.ParsePayload<T>(await resp.text()));
  }

  /**
   * Performs a PUT request.
   *
   * @template T
   * @param {string} endpoint - API endpoint or URL.
   * @param {Payload} [payload] - Payload/body to send (string or file array).
   * @param {number} [timeout=-1] - Optional timeout in milliseconds, -1 for no timeout.
   * @param {KeyValue} [headers] - Optional HTTP headers.
   * @returns {Promise<NetResponse<T | undefined>>} Resolves with the NetResponse.
   */
  static async PUT<T>(endpoint: string, payload?: Payload, timeout: number = -1, headers?: KeyValue | undefined): Promise<NetResponse<T | undefined>> {
    const resp = await fetch((endpoint.startsWith("http")) ? endpoint : `${this.DEFAULT_DOMAIN}/${endpoint}`, {
      method: "PUT",
      headers: { ...this.DEFAULT_HEADERS, ...headers },
      body: this.PreparePayload(payload),
      signal: timeout === -1 ? null : AbortSignal.timeout(timeout)
    });

    if (resp.status !== 200) return new NetResponse<undefined>(resp.status, resp.statusText, undefined);

    if (resp.headers.get("Content-Type") === "application/octet-stream")
      return new NetResponse<T>(resp.status, resp.statusText, new Uint8Array(await resp.arrayBuffer()) as any);
    return new NetResponse<T>(resp.status, resp.statusText, NetAPI.ParsePayload<T>(await resp.text()));
  }

  /**
   * Performs a PATCH request.
   *
   * @template T
   * @param {string} endpoint - API endpoint or URL.
   * @param {Payload} [payload] - Payload/body to send (string or file array).
   * @param {number} [timeout=-1] - Optional timeout in milliseconds, -1 for no timeout.
   * @param {KeyValue} [headers] - Optional HTTP headers.
   * @returns {Promise<NetResponse<T | undefined>>} Resolves with the NetResponse.
   */
  static async PATCH<T>(endpoint: string, payload?: Payload, timeout: number = -1, headers?: KeyValue | undefined): Promise<NetResponse<T | undefined>> {
    const resp = await fetch((endpoint.startsWith("http")) ? endpoint : `${this.DEFAULT_DOMAIN}/${endpoint}`, {
      method: "PATCH",
      headers: { ...this.DEFAULT_HEADERS, ...headers },
      body: this.PreparePayload(payload),
      signal: timeout === -1 ? null : AbortSignal.timeout(timeout)
    });

    if (resp.status !== 200) return new NetResponse<undefined>(resp.status, resp.statusText, undefined);

    if (resp.headers.get("Content-Type") === "application/octet-stream")
      return new NetResponse<T>(resp.status, resp.statusText, new Uint8Array(await resp.arrayBuffer()) as any);
    return new NetResponse<T>(resp.status, resp.statusText, NetAPI.ParsePayload<T>(await resp.text()));
  }

  /**
   * Performs a DELETE request
   *
   * @template T
   * @param {string} endpoint - API endpoint or URL.
   * @param {Payload} [payload] - Payload/body to send (string or file array).
   * @param {number} [timeout=-1] - Optional timeout in milliseconds, -1 for no timeout.
   * @param {KeyValue} [headers] - Optional HTTP headers.
   * @returns {Promise<NetResponse<T | undefined>>} Resolves with the NetResponse.
   */
  static async DELETE<T>(endpoint: string, payload?: Payload, timeout: number = -1, headers?: KeyValue | undefined): Promise<NetResponse<T | undefined>> {
    const resp = await fetch((endpoint.startsWith("http")) ? endpoint : `${this.DEFAULT_DOMAIN}/${endpoint}`, {
      method: "DELETE",
      headers: { ...this.DEFAULT_HEADERS, ...headers },
      body: this.PreparePayload(payload),
      signal: timeout === -1 ? null : AbortSignal.timeout(timeout)
    });

    if (resp.status !== 200) return new NetResponse<undefined>(resp.status, resp.statusText, undefined);

    if (resp.headers.get("Content-Type") === "application/octet-stream")
      return new NetResponse<T>(resp.status, resp.statusText, new Uint8Array(await resp.arrayBuffer()) as any);
    return new NetResponse<T>(resp.status, resp.statusText, NetAPI.ParsePayload<T>(await resp.text()));
  }
}
