/*
 * @Author: Tiny
 * @Date: 2019-05-16 17:35:31
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-16 17:42:17
 */
import { EnthusiasmAction } from '../actions';
import { DECREASE_ENTHUSIASM, INCREASE_ENTHUSIASM } from "../contants/index";
import { IStoreState } from "../types/index";

export function enthusiasm (state: IStoreState, action: EnthusiasmAction): IStoreState {
  switch (action.type) {
    case INCREASE_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREASE_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel -1) }
  }
  return state;
}