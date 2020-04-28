import { addCollectionItem, updateCollectionItem } from '../../controllers/collections';
import { 
  CollectionType, 
  CollectionInputType, 
  CollectionInputUpdateType ,
} from '../types';

export const baseAddCollectionOptions = {
  type: CollectionType,
  inputType: CollectionInputType,
  controller: addCollectionItem,
}

export const baseUpdateCollectionOptions = {
  type: CollectionType,
  inputType: CollectionInputUpdateType,
  controller: updateCollectionItem,
}
