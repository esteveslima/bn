export default (functionResult) => {
  try {
    if (typeof functionResult === 'object') {
      const {
        statusCode = 200,
        headers = { 'Content-type': 'application/json' },
        isBase64Encoded = false,
        ...body
      } = functionResult;

      return {
        statusCode,
        headers,
        isBase64Encoded,
        body: JSON.stringify(body),
      };
    }

    return { statusCode: 200, headers: { 'Content-type': 'application/json' }, body: functionResult.toString() };
  } catch (err) {
    return { statusCode: 500, body: 'Error on parse response' };
  }
};
