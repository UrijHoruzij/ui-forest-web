import React, { useState } from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Pagination, ThemeProvider } from "../";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let PageSize = 1;

const PaginationTemplate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      totalCount={data.length}
      pageSize={PageSize}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

describe("Pagination component", () => {
  test("Render pagination snapshot", () => {
    const component = (
      <ThemeProvider>
        <PaginationTemplate></PaginationTemplate>
      </ThemeProvider>
    );
    render(component);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
