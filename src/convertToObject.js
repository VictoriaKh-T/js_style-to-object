'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styles = sourceString.split(';');

  for (const style of styles) {
    const properties = style.split(':');
    const lines = properties.map((property) => property.trim());

    result[lines[0]] = lines[1];
  }

  return result;
}

module.exports = convertToObject;
