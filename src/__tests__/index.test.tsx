import * as React from "react";
import * as renderer from "react-test-renderer";
import { FormattedDate } from "../index";

test("FormattedDate", () => {
  const value = new Date("2006-01-02T15:04:05+08:00");
  const format = "LLLL";
  const tree = renderer
    .create(<FormattedDate format={format} value={value} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
