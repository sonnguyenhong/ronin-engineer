#include<bits/stdc++.h>
using namespace std;

int main() {
    int N;
    int A[100001];
    int visited[100001];

    cin>>N;
    for(int i = 0 ; i < N ; i++) {
        cin>>A[i];
        visited[i] = 0;
    }

    sort(A, A + N);

    int middleValue = A[N-1] / 2 + 1;
    int middleIndex = 0;
    int result = 0;

    for(int i = 0 ; i < N ; i++) {
        if(A[i] >= middleValue) {
            middleIndex = i;
            break;
        }
    }
    
    for(int i = middleIndex ; i >= 0 ; i--) {
        if(visited[i] == 0) {
            for(int j = i+1 ; j < N ; j++) {
                if(A[j] >= 2 * A[i] && visited[j] == 0) {
                    visited[i] = 1;
                    visited[j] = 1;
                    result++;
                    break;
                }
            }
        }
    }

    for(int i = 0 ; i < N ; i++) {
        if(visited[i] == 0) {
            result++;
        }
    }

    cout<<result;
}