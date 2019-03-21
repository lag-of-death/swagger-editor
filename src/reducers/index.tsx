import { IRuleResult } from "@stoplight/spectral";
import { DISPLAY_ISSUES, EDITOR_TEXT_CHANGE } from "../actions";
import { ISpecPart } from "../components/TreeView/interfaces";

interface IActionHandlers {
  [key: string]: () => Store;
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

const reducer = (
  {spec, text}: { spec: ISpecPart, text: string },
  action: { type: string, payload?: any },
): Store => {

  const actions = {
    [EDITOR_TEXT_CHANGE]: () => handleTextChange(spec, action.payload),
    [DISPLAY_ISSUES]: () => ({issues: action.payload, spec, text}),
  } as IActionHandlers;

  const actionType = action.type;
  const actionHandler = actions[actionType];

  return actionHandler ? actionHandler() : {spec, text: "", issues: []};
};

export default reducer;
