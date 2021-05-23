// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import Ajv from 'ajv';
import ErrorObjects from '../config/errors/service-errors';

export default (data : any, schema : object) : boolean | never => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    const validationMessage = validate.errors?.map((e) => `${e.instancePath} ${e.message}(${JSON.stringify(e.params)})`).join('\n');
    throw new ErrorResponse({ ...ErrorObjects.WRONG_PARAMETERS, message: validationMessage }, JSON.stringify(validate.errors));
  }
  return true;
};
