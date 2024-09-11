import { json } from '@remix-run/node';

export async function loader() {
  const roll = Math.random();
  if (roll < 0.33) {
    return json({
      error: null,
      message: 'Yes',
    });
  }

  if (roll <= 0.67) {
    return json({
      error: 'Error',
      message: null,
    });
  }

  return null;
}
