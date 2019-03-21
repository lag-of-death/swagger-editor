import { IRuleResult } from "@stoplight/spectral";
import { CHANGE_EDITOR_TEXT, DISPLAY_ISSUES } from "../actions";
import { ISpecPart } from "../components/TreeView/interfaces";

interface IActionHandlers {
  [key: string]: (spec: ISpecPart, payload: any, text?: any) => Store;
}

type Store = { spec: ISpecPart, text: string, issues?: IRuleResult[] };

const handleTextChange = (spec: ISpecPart, payload: string) => {
  try {
    const specAsObj = (payload)
      ? JSON.parse(payload)
      : spec;

    return {
      spec: specAsObj,
      text: payload,
    };
  } catch (e) {
    return {
      spec,
      text: payload,
    };
  }
};

const actions = {
  [CHANGE_EDITOR_TEXT]: (spec, payload) => handleTextChange(spec, payload),
  [DISPLAY_ISSUES]: (spec, payload, text) => ({issues: payload, spec, text}),
} as IActionHandlers;

const reducer = (
  {spec, text}: { spec: ISpecPart, text: string },
  action: { type: string, payload?: any },
): Store => {
  const actionType = action.type;
  const actionHandler = actions[actionType];

  return actionHandler ? actionHandler(spec, action.payload, text) : {spec, text: "", issues: []};
};

export default reducer;
