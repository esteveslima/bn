/* eslint-disable prefer-rest-params */

jest.mock('@sls/lib', () => {
  const originalModule = jest.requireActual('@sls/lib');

  return {
    __esModule: true,
    ...originalModule,

    middleware: {
      before: jest.fn().mockImplementation(() => {}),
      after: jest.fn().mockImplementation(() => {}),
      error: jest.fn().mockImplementation(() => {}),
    },

    lambda: jest.fn().mockImplementation((func) => async function mockWrapper() { return func.apply(this, arguments); }),
  };
});
