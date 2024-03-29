const excludeMiddleware = async (resolve, root, args, context, info) => {
  const newInfo = {
    ...info,
    excludeMiddleware: false,
  };

  if (info.fieldName === 'errorCode' || info.fieldName === 'errorDesc') {
    newInfo.excludeMiddleware = true;
  }

  return await resolve(root, args, context, newInfo);
};

export default excludeMiddleware;
