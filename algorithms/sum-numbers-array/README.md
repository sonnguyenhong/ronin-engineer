# Tổng dãy số

## Problem

Cho dãy số A[] gồm N số nguyên dương. Tam giác đặc biệt của dãy số A[] là tam giác được tạo ra bởi n hàng, trong đó hàng thứ 1 là dãy số A[], hàng i là tổng hai phần tử liên tiếp của hàng i-1 (2 ≤ i ≤ n). Ví dụ A[] = {1, 2, 3, 4, 5}, khi đó tam giác được tạo nên như dưới đây:

[1, 2, 3, 4, 5]

[3, 5, 7, 9]

[8, 12, 16]

[20, 28]

[48]

Yêu cầu: Hãy sử dụng đệ quy để giải quyết bài toán trên.

Độ phức tạp cho phép: O(n2)

## Input

* Dòng thứ nhất đưa vào N là số lượng phần tử của dãy số A[]
* Dòng tiếp theo đưa vào N số của mảng A[]
* N, A[i] thỏa mãn ràng buộc: 1≤ N, A[i] ≤ 10

## Output

Đưa ra tam giác tổng theo từng dòng. Mỗi dòng của tam giác tổng được bao bởi ký tự [ ].

## Testcase

| Input            | Output                                                           |
| ---------------- | ---------------------------------------------------------------- |
| 5<br />1 2 3 4 5 | [1 2 3 4 5]<br />[3 5 7 9]<br />[8 12 16]<br />[20 28]<br />[48] |
