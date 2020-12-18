import {combineReducers} from 'redux';
import Auth from './Auth';
import Signup from './Signup'
import Users from './Users';
import Search from './Search'
import Topup from './Topup'
import HistoryTransfer from './HistoryTransfer'
import Transfer from './Transfer'
import Receiver from './Receiver'
import Device from './Device'


const reducers = combineReducers({
  Auth,
  Signup,
  Users,
  Search,
  Topup,
  HistoryTransfer,
  Transfer,
  Receiver,
  Device
});

export default reducers;
