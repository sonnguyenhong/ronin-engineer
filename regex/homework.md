1. Check if a string contains the word `word` in it (case insensitive). If you have no idea, I guess you could try `/word/`.

   ```
   /\bword\b/i
   ```
2. Use substitution to replace every occurrence of the word `i` with the word `I` (uppercase, I as in me).
   E.g.: `i'm replacing it. am i not?` -> `I'm replacing it. am I not?`. A regex match is replaced with the text in the `Substitution` field when using substitution.

   ```
   /\bi\b/g
   ```
3. With regex you can *count* the number of matches. Can you make it return the number of uppercase consonants (B,C,D,F,..,X,Y,Z) in a given string?
   E.g.: it should return `3` with the text `ABcDeFO!`. **Note:** Only ASCII. We consider `Y` to be a consonant! **Example:** the regex `/./g` will return **3** when run against the string `abc`.

   ```

   ```
