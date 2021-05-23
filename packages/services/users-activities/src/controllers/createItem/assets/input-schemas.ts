// // eslint-disable-next-line no-useless-escape, no-octal-escape
// const dateRegex = '(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)';

// eslint-disable-next-line no-useless-escape, no-octal-escape
const dateRegex = '^[0-3][0-9]/[0-1][0-9]/[1-2][0-9][0-9][0-9]$';

export const body = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    executionDate: { type: 'string', pattern: dateRegex }, // dd/mm/yyyy
    conclusionDate: { type: 'string', pattern: dateRegex }, // dd/mm/yyyy
    status: { enum: ['pendent', 'finished'] },
    priority: { enum: ['low', 'medium', 'high'] },
  },
  required: ['name', 'executionDate', 'conclusionDate', 'status', 'priority'],
  additionalProperties: false,
};

export const path = {
  type: 'object',
  properties: {
    userName: { type: 'string' },
  },
  required: ['userName'],
  additionalProperties: false,
};
