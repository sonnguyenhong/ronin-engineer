#include<bits/stdc++.h>
using namespace std;

bool checkValidCombination(vector<int> vecA, vector<int> vecB) {
    for(int i = 0 ; i < vecA.size() ; i++) {
        if(vecA[i] > vecB[i]) {
            return false;
        }
    }
    return true;
}

int main() {
    int N;
    int A[128];
    int B[128];
    vector<vector<int>> permutationsOfA;
    vector<vector<int>> permutationsOfB;
    

    cin>>N;
    for(int i = 0 ; i < N ; i++) {
        cin>>A[i];
    }

    for(int i = 0 ; i < N ; i++) {
        cin>>B[i];
    }

    sort(A, A + N);
    sort(B, B + N);

    do {
        vector<int> permA(A, A + N);
        permutationsOfA.push_back(permA);
    } while (next_permutation(A, A + N));

    do {
        vector<int> permB(B, B + N);
        permutationsOfB.push_back(permB);
    } while(next_permutation(B, B + N));

    for(int i = 0 ; i < permutationsOfA.size() ; i++) {
        bool isValidCombination = checkValidCombination(permutationsOfA[i], permutationsOfB[i]);
        cout<<isValidCombination;
        if(isValidCombination) {
            cout<<"YES";
            return 0;
        }
        cout<<"\n";
    }

    cout<<"NO";

    return 0;
}