/**
 * data-loader.js
 *
 * Fetches and validates the case directory and individual case records.
 *
 * Exports:
 *   DataLoadError — typed error with a FETCH_FAILED or INVALID_DATA code.
 *   loadCaseIndex() — fetches and validates data/cases/index.json.
 *   loadCase(id) — fetches and validates one case JSON file by stable ID.
 *
 * No case content is generated or hard-coded in this module.
 */

export class DataLoadError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'DataLoadError';
    this.code = code;
  }
}

// IDs are safe filename slugs: lowercase alphanumeric segments separated by
// single hyphens. This prevents path traversal and unexpected file paths.
const VALID_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidId(id) {
  return typeof id === 'string' && VALID_ID.test(id);
}

function isValidIndexEntry(entry) {
  return (
    entry !== null &&
    typeof entry === 'object' &&
    !Array.isArray(entry) &&
    isValidId(entry.id) &&
    typeof entry.name === 'string' &&
    entry.name.trim().length > 0
  );
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

async function fetchJson(url, description) {
  let response;

  try {
    response = await fetch(url);
  } catch (error) {
    throw new DataLoadError(
      `Could not reach ${description}: ${errorMessage(error)}`,
      'FETCH_FAILED'
    );
  }

  if (!response.ok) {
    throw new DataLoadError(
      `Failed to load ${description} (HTTP ${response.status} ${response.statusText}).`,
      'FETCH_FAILED'
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new DataLoadError(
      `${description} is not valid JSON: ${errorMessage(error)}`,
      'INVALID_DATA'
    );
  }
}

/** Fetch and validate the ordered case directory. */
export async function loadCaseIndex() {
  const data = await fetchJson('data/cases/index.json', 'the case index');

  if (!Array.isArray(data)) {
    throw new DataLoadError('The case index must be an array.', 'INVALID_DATA');
  }

  const seenIds = new Set();
  data.forEach((entry, index) => {
    if (!isValidIndexEntry(entry)) {
      throw new DataLoadError(
        `Case index entry at position ${index} is malformed.`,
        'INVALID_DATA'
      );
    }

    if (seenIds.has(entry.id)) {
      throw new DataLoadError(
        `Case index contains duplicate id "${entry.id}".`,
        'INVALID_DATA'
      );
    }

    seenIds.add(entry.id);
  });

  return data;
}

/** Fetch and validate an individual case record by its stable ID. */
export async function loadCase(id) {
  if (!isValidId(id)) {
    throw new DataLoadError(
      'Invalid case id. Use lowercase alphanumeric segments separated by single hyphens.',
      'INVALID_DATA'
    );
  }

  const data = await fetchJson(`data/cases/${id}.json`, `case "${id}"`);

  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    throw new DataLoadError(
      `Case file "${id}.json" must contain a JSON object.`,
      'INVALID_DATA'
    );
  }

  if (typeof data.id !== 'string' || data.id !== id) {
    throw new DataLoadError(
      `Case file "${id}.json" has a missing or mismatched id.`,
      'INVALID_DATA'
    );
  }

  return data;
}
