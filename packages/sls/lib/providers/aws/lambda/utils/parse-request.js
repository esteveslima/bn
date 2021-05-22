export default (requestArgs) => {
  const args = requestArgs;

  try {
    const jsonRequest = JSON.parse(args[0].body);
    args[0].body = jsonRequest;
  } catch (err) {
    // not a json body
  }

  return args;
};
