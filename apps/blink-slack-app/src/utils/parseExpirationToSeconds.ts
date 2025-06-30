export function parseExpirationToSeconds(value: string): number {
  const match = value.match(/^(\d+)([mh])$/);

  if (!match) {
    throw new Error(`Invalid expiration format: ${value}`);
  }

  const amount = parseInt(match[1], 10);
  const unit = match[2];

  switch (unit) {
    case 'm':
      return amount * 60; // minutes to seconds
    case 'h':
      return amount * 60 * 60; // hours to seconds
    default:
      throw new Error(`Unsupported time unit: ${unit}`);
  }
}
