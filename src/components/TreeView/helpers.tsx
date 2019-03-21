import { IRuleResult } from "@stoplight/spectral";

const getType = (entity: any) => ({}.toString.call(entity));

const getIssuesOfSeverity = (severity: string, diagnostics: IRuleResult[]) =>
  diagnostics.filter(({severityLabel}: IRuleResult) => severityLabel === severity);

const getErrors = getIssuesOfSeverity.bind(null, "error");
const getWarnings = getIssuesOfSeverity.bind(null, "warn");

const getDiagnosticsForPath = (diagnostics: IRuleResult[], givenPath: string[]) =>
  diagnostics.filter(({path}: IRuleResult) => {
    return givenPath.every((p, i) => {
      return p === path[i];
    });
  });

const getErrorsAndWarningsForPath = (diagnostics: IRuleResult[], path: string[]) => {
  const diagnosticsForPath = getDiagnosticsForPath(diagnostics, path);

  return {
    errors: getErrors(diagnosticsForPath),
    warnings: getWarnings(diagnosticsForPath),
  };
};

const isObjectOrArray = (key: any) => {
  const keyType = getType(key);

  return keyType === "[object Object]" || keyType === "[object Array]";
};

export {
  isObjectOrArray,
  getErrorsAndWarningsForPath,
};
