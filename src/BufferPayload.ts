import { KeyValue } from "Types";

/**
 * Represents a single buffer or file to be sent as part of an HTTP multipart/form-data payload.
 */
export class BufferPayload {
  /**
   * The file or binary content to send.
   * @type {Blob}
   */
  payload: Blob;

  /**
   * The filename or field name for this payload.
   * @type {string}
   */
  name: string;

  /**
   * Optional extra fields to include along with the payload in the multipart request.
   * Key-value pairs.
   * @type {Dictionary}
   */
  extraFields: KeyValue;

  /**
   * Creates a BufferPayload instance.
   * @param {Blob} payload - The binary content or file to send.
   * @param {string} name - The field (or file) name.
   */
  constructor(payload: Blob, name: string) {
    this.payload = payload;
    this.name = name;
    this.extraFields = {} as KeyValue;
  }

  /**
   * Adds an extra field to the multipart payload.
   * Allows chaining.
   * @param {string} field - The name of the extra form field.
   * @param {string} data - The value of the extra form field.
   * @returns {BufferPayload} The current BufferPayload instance (for chaining).
   */
  WithExtraField(field: string, data: string): BufferPayload {
    this.extraFields[field] = data;
    return this;
  }
}
