#include<bits/stdc++.h>
using namespace std;

int isValidPair(char openChar, char closeChar) {
    if((openChar == '(' && closeChar == ')') ||
        (openChar == '[' && closeChar == ']') ||
        (openChar == '{' && closeChar == '}')
    ) {
        return 1;
    }
    return 0;
}

int main() {
    string inputString;
    stack<char> stack;
    cin>>inputString;

    int stringLength = inputString.length();
    for(int i = 0 ; i < stringLength ; i++) {
        if(inputString[i] == '(' || inputString[i] == '[' || inputString[i] == '{') {
            stack.push(inputString[i]);
        } else {
            if(!isValidPair(stack.top(), inputString[i])) {
                cout<<"NO";
                return 0;
            } else {
                stack.pop();
            }
        }
    }
    
    if(stack.size() == 0) {
        cout<<"YES";
    } else {
        cout<<"NO";
    }
    return 0;
}