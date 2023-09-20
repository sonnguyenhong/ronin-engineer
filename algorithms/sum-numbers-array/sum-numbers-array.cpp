#include<bits/stdc++.h>
using namespace std;

void solve(int A[], int N) {
    if(N <= 1) {
        return;
    } 
    cout<<"[";
    for (int i = 0 ; i < N - 1 ; i++) {
        A[i] = A[i] + A[i+1];
        cout<<A[i];
        if(i < N - 2) {
            cout<<" ";
        }
    }
    cout<<"]"<<endl;
    return solve(A, N-1);
}

int main() {
    int N;
    int A[10001];

    cin>>N;
    for(int i = 0 ; i < N ; i++) {
        cin>>A[i];
    }  
    cout<<"[";
    for(int i = 0 ; i < N ; i++) {
        cout<<A[i];
        if(i < N - 1) {
            cout<<" ";
        }
    }
    cout<<"]"<<endl;
    solve(A, N);
}
