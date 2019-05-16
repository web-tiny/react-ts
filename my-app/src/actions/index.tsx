/*
 * @Author: Tiny
 * @Date: 2019-05-16 17:22:54
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-16 18:26:07
 */
import * as constants from '../contants'

export interface IIncrementEnthusiasm {
  type: constants.INCREASE_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
  type: constants.DECREASE_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm

export function incrementEnthusiasm(): IIncrementEnthusiasm {
  return {
    type: constants.INCREASE_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {
    type: constants.DECREASE_ENTHUSIASM
  }
}