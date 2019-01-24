import * as React from "react";
export interface FormattedDateProps {
  // See "Localized formats" of moment to learn what it means
  // https://momentjs.com/docs/#/displaying/format/
  format:
    | "LT"
    | "LTS"
    | "L"
    | "l"
    | "LL"
    | "ll"
    | "LLL"
    | "lll"
    | "LLLL"
    | "llll";
  value: Date;
}
export class FormattedDate extends React.Component<FormattedDateProps> {}
