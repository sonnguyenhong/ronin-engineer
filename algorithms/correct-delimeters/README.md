# Kiểm tra dãy ngoặc đúng

## Problem

Cho một xâu chỉ gồm các kí tự ‘(‘, ‘)’, ‘[‘, ‘]’, ‘{‘, ‘}’. Một dãy ngoặc đúng được định nghĩa như sau:

* Xâu rỗng là 1 dãy ngoặc đúng.
* Nếu A là 1 dãy ngoặc đúng thì (A), [A], {A} là 1 dãy ngoặc đúng.
* Nếu A và B là 2 dãy ngoặc đúng thì AB là 1 dãy ngoặc đúng.

Yêu cầu: Cho một xâu S. Nhiệm vụ của bạn là xác định xâu S có là dãy ngoặc đúng hay không?

Độ phức tạp cho phép: O(n)

## Input

Một xâu S có độ dài không vượt quá 100.000

## Output

* In ra “YES” nếu như S là dãy ngoặc đúng.
* In ra “NO” trong trường hợp ngược lại.

## Testcase

| Test 1                                                              | Test 2                                |
| ------------------------------------------------------------------- | ------------------------------------- |
| Input:<br />[ ( ) ] { } { [ ( ) ( ) ] ( ) }<br />Output: <br />YES | Input:<br />[(])<br />Output:<br />NO |
