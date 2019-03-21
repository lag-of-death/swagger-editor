import { CHANGE_EDITOR_TEXT, DISPLAY_ISSUES } from "../actions";
import { ISpecPart } from "../components/TreeView/interfaces";
import { Store } from "../shared";

interface IActionHandlers {
  [key: string]: (spec: ISpecPart, payload: any, text?: any) => Store;
}

const handleTextChange = (spec: ISpecPart, payload: string) => {
  try {
    const specAsObj = (payload)
      ? JSON.parse(payload)
      : spec;

    return {
      isJSONValid: true,
      spec: specAsObj,
      text: payload,
    };
  } catch (e) {
    return {
      isJSONValid: false,
      spec,
      text: payload,
    };
  }
};

const actions = {
  [CHANGE_EDITOR_TEXT]: (spec, payload) => {
    const updatedStore = (!payload)
      ? {
        isJSONValid: false,
        spec: {},
        text: "",
      }
      : handleTextChange(spec, payload);

    return {...updatedStore, issues: []};
  },
  [DISPLAY_ISSUES]: (spec, payload, text) => ({issues: payload, spec, text}),
} as IActionHandlers;

const reducer = (
  store: Store,
  action: { type: string, payload?: any },
): Store => {
  const actionType = action.type;
  const actionHandler = actions[actionType];

  return actionHandler
    ? {...store, ...actionHandler(store.spec, action.payload, store.text)}
    : store;
};

export default reducer;
