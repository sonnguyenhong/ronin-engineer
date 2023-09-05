#include<bits/stdc++.h>
using namespace std;

void solve(int A[], int B[], int N) {
    for(int i = 0 ; i < N ; i++) {
        if(A[i] > B[i]) {
            cout<<"NO";
            return;
        }
    }
    cout<<"YES";
    return;
}

int main() {
    int N;
    int A[128];
    int B[128];
    
    cin>>N;
    for(int i = 0 ; i < N ; i++) {
        cin>>A[i];
    }

    for(int i = 0 ; i < N ; i++) {
        cin>>B[i];
    }

    sort(A, A + N);
    sort(B, B + N);

    solve(A, B, N);

    return 0;
}