# MAGIC STICK

## Problem

Cả tuần liền ngồi đọc Harry Potter làm đầu óc của Tý ngày nào cũng nghĩ về phép thuật. Đêm qua, cậu đã có giấc mơ trở thành nhân vật chính của câu chuyện.

Tí thấy mình đang chiến đấu với kẻ thù và bị truy đuổi ráo riết. Nhiệm vụ của Tý hiện tại là đi tìm những chiếc gậy ma thuật để mang lại sức mạnh cho những đồng đội đang bị cô lập của mình. Theo lời chỉ dẫn của một nhà tiên tri, Tí đã đến được khu vườn phép màu. Sau khi sử dụng một vài thần chú, Tí đã tìm được N chiếc gậy có sức mạnh lớn nhất, mỗi chiếc có độ dài bằng A[i]. Tuy nhiên, những chiếc gậy này cần phải được bảo vệ trong những chiếc hộp phép thuật, nếu không, chúng sẽ bị suy giảm ma thuật. Tí cũng đã tìm được N chiếc hộp phép thuật. Một chiếc gậy có thể đặt được trong một chiếc hộp phép thuật nếu như chiều dài X của nó không vượt quá kích thước Y của chiếc hộp (X ≤ Y).

Thời gian hết sức gấp rút. Các bạn hãy tính giúp Tí xem liệu có thể mang đi được tất cả N chiếc gậy ma thuật hay không? Nếu có thể, đây sẽ là nguồn sức mạnh thần bí vô giá để Tí cùng các đồng đội chiến thắng được kẻ thù.

## Input

- Dòng đầu tiên là số nguyên N (N ≤ 100).
- Dòng tiếp theo gồm N số nguyên A[i] (1 ≤ B[i] ≤ 109 ), là độ dài của những chiếc gậy.
- Dòng cuối gồm N số nguyên B[i] (1 ≤ B[i] ≤ 109 ), là kích thước của những chiếc hộp.

## Output

In ra “YES” nếu xếp được N chiếc gậy vào những chiếc hộp, in ra “NO” trong trường hợp ngược lại.

## Testcase

|             | Test 1                    | Test 2                      |
| ----------- | ------------------------- | --------------------------- |
| **Input**  | 3<br />7 8 5<br />6 12 10 | 4<br />6 3 3 5<br />9 2 9 9 |
| **Output** | YES                       | NO                          |
