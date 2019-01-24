import * as React from "react";
import moment from "moment";

export interface Props {
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

export function FormattedDate(props: Props) {
  const { format, value } = props;
  const m = moment(value);
  return (m.format(format) as any) as React.ReactElement<any>;
}
