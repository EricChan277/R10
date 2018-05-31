import Realm from 'realm';
const FavesSchema = {
  name: 'Faves',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

export const queryAllFaves = () => {
  return realm.objects('Faves');
};

export const addFave = id => {
  realm.write(() => {
    realm.create('Faves', {
      id: id + '',
      faved_on: new Date()
    });
  });
};

export const deleteFave = id => {
  realm.write(() => {
    const faveToDelete = realm.objects('Faves').filtered('id == $0', id);
    realm.delete(faveToDelete);
  });
};

const realm = new Realm({ schema: [FavesSchema] });
export default realm;
