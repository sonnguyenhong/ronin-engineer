# Sắp xếp Kangaroo

## Problem

Có N con kanguru trong vườn thú, con thứ i có chiều cao bằng A[i]. Con kanguru có chiều cao X có thể chứa được một con có chiều cao bằng Y trong túi của nó nếu như X >= 2*Y. Một con đã chứa một con kanguru rồi, thì không thể nhảy vào túi một con kanguru khác. Bầy Kangaroo rất thích chơi trốn tìm, vì vậy chúng thường xuyên nhảy vào túi của nhau. Các bạn hãy tính toán xem trong trường hợp tối ưu, số con Kangaroo nhìn thấy trong vườn thú ít nhất bằng bao nhiêu?

## Input

Dòng đầu tiên là số nguyên N (1 ≤ N ≤ 100 000).

Dòng thứ hai là N số nguyên A[i] (1 ≤ A[i] ≤ 100 000).

## Output

Một số nguyên cho biết số con Kangaroo có thể nhìn thấy trong vườn thú.

## Testcases

| Test | Input                  | Output | Explain                             |
| ---- | ---------------------- | ------ | ----------------------------------- |
| 1    | 8<br />2 5 7 6 9 8 4 2 | 5      | Nhóm 2 – 5, 2 – 6, 4 – 8, 7, 9. |
| 2    | 8<br />9 1 6 2 6 5 8 3 | 5      |                                     |
