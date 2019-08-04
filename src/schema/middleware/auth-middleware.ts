import publicFields from '../../configs/public-fields.json';

const authMiddleware = async (resolve, root, args, context, info) => {
  if (!publicFields.includes(info.fieldName)) {
    // TODO check for api key. Throw if no match
  }
};

export default authMiddleware;
