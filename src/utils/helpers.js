export const toTitleCase = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());

export function hexToRgb(hex, type) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex[type]);
      const x = result ? (parseInt(result[1], 16) + parseInt(result[2], 16) + parseInt(result[3], 16)) : null
      return x;
  }
