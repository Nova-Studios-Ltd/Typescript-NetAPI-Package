import { BufferPayload } from "BufferPayload";

/**
 * Represents an object whose keys and values are strings,
 * typically used for HTTP headers or key-value data sets.
 * @typedef {Object.<string, string>} KeyValue
 */
export type KeyValue = { [key: string]: string };

/**
 * A type representing allowed payloads for HTTP requests.
 * Can be a string (for JSON, text, etc.), or an array of BufferPayload (for file uploads),
 * or undefined if there is no payload.
 *
 * @typedef {string | BufferPayload[] | undefined} Payload
 */
export type Payload = string | BufferPayload[] | undefined;
