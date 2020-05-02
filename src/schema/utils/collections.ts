import { addCollectionItem, updateCollectionItem, incrementCollectionItem } from '../../controllers/collections';
import { 
  CollectionType, 
  CollectionInputType, 
  CollectionInputUpdateType,
  CollectionInputIncrementType, 
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

export const baseIncrementCollectionOptions = {
  type: CollectionType,
  inputType: CollectionInputIncrementType,
  controller: incrementCollectionItem,
}
