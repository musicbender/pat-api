// import { addCollectionItem, updateCollectionItem } from '../../controllers/health';
import { 
  CollectionType, 
  CollectionInputType, 
  CollectionInputUpdateType ,
} from '../types';

export const baseAddCollectionOptions = {
  type: CollectionType,
  inputType: CollectionInputType,
  // controller: addCollectionItem,
  controller: () => null,
}

export const baseUpdateCollectionOptions = {
  type: CollectionType,
  inputType: CollectionInputUpdateType,
  // controller: updateCollectionItem,
  controller: () => null,
}
