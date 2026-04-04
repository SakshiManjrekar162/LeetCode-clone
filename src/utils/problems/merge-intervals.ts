import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMergeIntervals = `function mergeIntervals(intervals){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerMergeIntervals = (fn: any) => {
  try {
    const tests = [
      {
        input: [[ [1,3],[2,6],[8,10],[15,18] ]],
        expected: [[1,6],[8,10],[15,18]]
      },
      {
        input: [[ [1,4],[4,5] ]],
        expected: [[1,5]]
      },
      {
        input: [[ [1,4],[0,2],[3,5] ]],
        expected: [[0,5]]
      }
    ];

    for (let test of tests) {
      const result = fn(test.input[0]);
      // Sort intervals by start for consistent comparison
      const sortedResult = result.sort((a: number[], b: number[]) => a[0] - b[0]);
      const sortedExpected = test.expected.sort((a: number[], b: number[]) => a[0] - b[0]);
      assert.deepStrictEqual(sortedResult, sortedExpected);
    }

    return true;
  } catch (error: any) {
    console.log("mergeIntervals handler function error");
    throw new Error(error);
  }
};

export const mergeIntervals: Problem = {
  id: "merge-intervals",
  title: "2. Merge Intervals",
  problemStatement: `<p class='mt-3'>
    Given an array of intervals where <code>intervals[i] = [start_i, end_i]</code>, merge all overlapping intervals,
    and return an array of the non-overlapping intervals that cover all the intervals in the input.
  </p>`,
  examples: [
    {
      id: 1,
      inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      outputText: "[[1,6],[8,10],[15,18]]",
      explanation: "Intervals [1,3] and [2,6] overlap, so they are merged into [1,6]."
    },
    {
      id: 2,
      inputText: "intervals = [[1,4],[4,5]]",
      outputText: "[[1,5]]",
      explanation: "Intervals [1,4] and [4,5] overlap, so they are merged into [1,5]."
    }
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ intervals.length ≤ 10^4</code>
  </li>
  <li class='mt-2'>
    <code>intervals[i].length == 2</code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ start_i ≤ end_i ≤ 10^4</code>
  </li>`,
  handlerFunction: handlerMergeIntervals,
  starterCode: starterCodeMergeIntervals,
  order: 2,
  starterFunctionName: "function mergeIntervals(",
};