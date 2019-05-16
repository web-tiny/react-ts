/*
 * @Author: Tiny
 * @Date: 2019-05-16 17:49:58
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-16 18:42:15
 */
import { connect } from "react-redux";
import { Dispatch } from "redux";
// tslint:disable-next-line:ordered-imports
import * as actions from "../actions";
import Login from '../components/Login';
import { IStoreState } from "../types/index";

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  }
}

// tslint:disable-next-line:no-shadowed-variable
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);