import { EDITOR_TEXT_CHANGE } from "../actions";
import { ISpecPart } from "../components/TreeView/interfaces";

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
  action: { type: string, payload?: string },
): { spec: ISpecPart, text?: string } => {
  return (action.type === EDITOR_TEXT_CHANGE)
    ? handleTextChange(spec, action.payload)
    : {
      spec,
    };
};

export default reducer;
