export const body = {};

export const path = {
  type: 'object',
  properties: {
    userName: { type: 'string' },
  },
  required: ['userName'],
  additionalProperties: false,
};
