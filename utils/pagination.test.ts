
import { Page, generatePages } from "./pagination"

describe("The pagination utils", () => {
  it("Should return a single page pagination", () => {
    const result = generatePages(1, 1, 20);
    expectPaginationLabels(result).toEqual([
      "<<", "1", ">>"
    ])
  })

  it("Should return a multiple page pagination", () => {
    const result = generatePages(10, 1, 20);
    expectPaginationLabels(result).toEqual([
      "<<", "1", "2", "3", "...", "10", ">>"
    ])
  })

  it("Should be able to ellipse before the current", () => {
    const result = generatePages(10, 10, 20);
    expectPaginationLabels(result).toEqual([
      "<<", "1", "...", "8", "9", "10", ">>"
    ])
  })

  it("Should be able to ellipse before and after the current", () => {
    const result = generatePages(10, 5, 20);
    expectPaginationLabels(result).toEqual([
      "<<", "1", "...", "3", "4", "5", "6", "7", "...", "10", ">>"
    ])
  })

  it("Should not have a link on current", () => {
    const result = generatePages(10, 5, 20);
    expect(result.find(i => i.index === 5)?.link).toEqual(undefined);
  })

  it("Should not have a link on ellipse", () => {
    const result = generatePages(10, 5, 20);
    expect(result.find(i => i.label === "..." && i.link !== undefined)).toBeUndefined()
  })

  const expectPaginationLabels = (result: Page[]) => expect(result.map(i => i.label));
})
