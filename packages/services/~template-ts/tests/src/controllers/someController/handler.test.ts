/* eslint-disable import/first */

// Import sut resources
// import ...

// Mock sut resources
// jest.mock(...)

// Import mocks
import * as mocks from '../../../mocks/src/controllers/someController/handler.mock';

// Import sut
// import sut from '../../../../src/controllers/someController/handler';

describe('(@services/~template-ts): someController', () => {
  beforeAll(() => { });
  beforeEach(() => { jest.resetAllMocks(); });
  afterEach(() => { });
  afterAll(() => { jest.restoreAllMocks(); });

  it('expect [test scope] to [test goal] if [scenario conditions]   <-   Test description template', () => { expect(true).toBeTruthy(); });
});
