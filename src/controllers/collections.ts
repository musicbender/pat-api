import * as uuid from 'uuid';
import * as shortid from 'shortid';
import * as moment from 'moment';
import { CollectionType, CollectionInputType, CollectionInputUpdateType, CollectionConfigType } from '../types';
import models from '../models';
import { Model } from 'sequelize-typescript';
import { ExpectedError } from '../utils/errors';
import { findItemById } from './global';

// add collection item
export const addCollectionItem = async (input: CollectionInputType, config: CollectionConfigType): Promise<CollectionType> => {
  // if type has been disabled in config
  if (config.disabled) throw new ExpectedError('DISABLED_COLLECTION_TYPE');

  let data: CollectionType = {
    ...input,
    id: uuid(),
    shortId: shortid.generate(),
    createdOn: moment().toISOString(),
  };

  const item = models[config.modelID];

  try {
    const res: any = await item.create(data);
    return res.dataValues;
  } catch (err) {
    throw new ExpectedError('ADD_COLLECTION_ERROR');
  }
}

// update collection item
export const updateCollectionItem = async (id: string, input: CollectionInputUpdateType, config: CollectionConfigType): Promise<Model> => {
  if (config.disabled) throw new ExpectedError('DISABLED_COLLECTION_TYPE');

  const item = models[config.modelID];
  let data = { ...input, updatedOn: moment().toISOString() }

  try {
    const [rows, [ updatedItem ]]: any = await item.update({ ...data }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('UPDATE_COLLECTION_ERROR');
  }
}

export const incrementCollection = async (id: string, increment: number = 1, config: CollectionConfigType): Promise<Model> => {
  if (config.disabled) throw new ExpectedError('DISABLED_COLLECTION_TYPE');

  const item = models[config.modelID];
  const data: any = await findItemById(id, config.modelID);

  if (!data) throw new ExpectedError('INCREMENT_COLLECTION_ERROR');

  const count = data.count ? data.count + increment : increment;
 
  try {
    const [rows, [ updatedItem ]]: any = await item.update({ count }, { where: { id }, returning: true });
    return updatedItem;
  } catch (err) {
    throw new ExpectedError('INCREMENT_COLLECTION_ERROR');
  }
}