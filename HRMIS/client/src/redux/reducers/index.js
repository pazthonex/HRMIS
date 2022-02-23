import { combineReducers } from 'redux';

import employees from './employee';
import auth from './auth';
import department from './department';

export const reducers = combineReducers({ employees ,auth, department });