# PerfBench

LLM Performance Benchmarking using Deno Bench (https://docs.deno.com/runtime/reference/cli/bench/) and docker sandbox (sbx).

## Run the sandbox 

```bash
sbx run opencode --kit ./sbx-kit/
```


# Methods

### Arrays & collections

1. `dedupe` — remove duplicates while preserving order
2. `intersection` — intersection of two arrays
3. `difference` — values present in A but not B
4. `frequencyCount` — count occurrences
5. `groupBy` — group items by computed key
6. `partition` — split items by predicate
7. `chunk` — divide array into fixed-size chunks
8. `flatten` — flatten nested arrays
9. `rotateArray` — rotate by K positions
10. `compact` — remove specified empty values
11. `zip` — combine corresponding elements
12. `unzip` — reverse a zip operation
13. `uniqueBy` — deduplicate by computed key
14. `indexBy` — construct key → item lookup
15. `countBy` — count by computed key
16. `minBy` — find minimum by computed value
17. `maxBy` — find maximum by computed value
18. `topK` — find K largest elements
19. `slidingWindowMax` — maximum for every window
20. `prefixSum` — construct cumulative sums

### Searching & selection

21. `binarySearch` — exact binary search
22. `lowerBound` — first element ≥ target
23. `upperBound` — first element > target
24. `nearestValue` — closest sorted value
25. `quickSelect` — kth-smallest element
26. `findMissingInteger` — missing value in integer sequence
27. `findDuplicate` — locate duplicate integer
28. `twoSum` — locate pair matching target
29. `threeSum` — locate triples matching target
30. `longestIncreasingSubsequence` — LIS length

### Sorting

31. `mergeSort`
32. `quickSort`
33. `heapSort`
34. `insertionSort`
35. `countingSort`
36. `radixSort`
37. `sortByKey` — sort records by property
38. `stableSort` — stable comparator sort
39. `partialSort` — retrieve smallest K sorted elements
40. `sortNearlySorted` — sort K-displaced data

### Strings

41. `reverseString`
42. `isPalindrome`
43. `longestCommonPrefix`
44. `longestSubstringWithoutRepeating`
45. `substringSearch`
46. `countOccurrences`
47. `replaceAllOccurrences`
48. `collapseWhitespace`
49. `wordFrequency`
50. `anagramCheck`
51. `groupAnagrams`
52. `levenshteinDistance`
53. `longestCommonSubsequence`
54. `runLengthEncode`
55. `runLengthDecode`
56. `escapeHtml`
57. `unescapeHtml`
58. `slugify`
59. `camelToSnake`
60. `snakeToCamel`

### Parsing & serialization

61. `parseQueryString`
62. `serializeQueryString`
63. `parseCSVRow`
64. `parseCSV`
65. `parseJSONLines`
66. `parseKeyValuePairs`
67. `parseLogLine`
68. `parseSemver`
69. `compareSemver`
70. `parseURLPath`

### Numeric / compute

71. `sum`
72. `mean`
73. `median`
74. `variance`
75. `standardDeviation`
76. `movingAverage`
77. `histogram`
78. `dotProduct`
79. `matrixMultiply`
80. `convolve1D`
81. `gcd`
82. `primeSieve`
83. `integerPower`
84. `fastFibonacci`
85. `rangeSum`

### Data structures

86. `LRUCache`
87. `MinHeap`
88. `MaxHeap`
89. `Deque`
90. `RingBuffer`
91. `Trie`
92. `UnionFind`
93. `PriorityQueue`
94. `BitSet`
95. `BloomFilter`

### Graphs & real-world transforms

96. `breadthFirstSearch`
97. `depthFirstSearch`
98. `shortestPath`
99. `mergeIntervals`
100. `joinRecordsByKey`
