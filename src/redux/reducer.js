import {
  PERSIST_TEST,
  SUBMIT_FORM,
  ADD_PHOTO_LIST,
  ADD_DOC_LIST,
  SET_IMAGE,
} from '../redux/action';

const initialState = {
  docDescription: '',
};

const docReducer = (istate = initialState, action) => {
  switch (action.type) {
    case PERSIST_TEST:
      return {...istate, ...action.payload};
    default:
      return istate;
  }
};

export default docReducer;

const photoState = {
  photoName: [
    {key: 'Hall', imageUri: 'Dummy', remark: ''},
    {key: 'Kitchen', imageUri: 'Dummy', remark: ''},
    {key: 'Bedroom', imageUri: 'Dummy', remark: ''},
    {key: 'Garden', imageUri: 'Dummy', remark: ''},
    {key: 'Balcony', imageUri: 'Dummy', remark: ''},
    {key: 'Bathroom', imageUri: 'Dummy', remark: ''},
  ],
};

export const photoReducer = (ph = photoState, action) => {
  switch (action.type) {
    case ADD_PHOTO_LIST:
      return {...ph, ...action.payload};
    case SET_IMAGE:
      let key = action.payload.key;
      let arr = ph.photoName.map((h, i) => {
        if (h.key === key) {
          return {...h, imageUri: action.payload.imagePath};
        }
        return {...h};
      });
      console.log('RRRRRRRRRRRR', {...ph, photoName: [...arr]});
      return {...ph, photoName: [...arr]};
    default:
      return ph;
  }
};

const docAddState = {
  docName: '',
};

export const docAddReducer = (doc = docAddState, action) => {
  switch (action.type) {
    case ADD_DOC_LIST:
      return {...doc, ...action.payload};
    default:
      return doc;
  }
};

const sampleState = {
  name1: '',
  email1: '',
  phone1: '',
  address1: '',
  type1: '',
  quantity1: '',
  // productName1: '',
  isEmpty: false,
};

export const formReducer = (st = sampleState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {...st, ...action.payload};
    default:
      return st;
  }
};

//  {key: 'Hall', imageUri: 'Dummy', remark: ''},
//     {key: 'Kitchen', imageUri: 'Dummy', remark: ''},
//     {key: 'Bedroom', imageUri: 'Dummy', remark: ''},
//     {key: 'Garden', imageUri: 'Dummy', remark: ''},
//     {key: 'Balcony', imageUri: 'Dummy', remark: ''},
//     {key: 'Bathroom', imageUri: 'Dummy', remark: ''},
