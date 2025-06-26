Prompt from Joe Williams @QuaverMusic :
I'd like you to write me a function that parses the Preamble to the 
US Constitution (you can hard-code it as a string) and returns a count 
of how many words begin with 't', how many end with 'e', and how many 
begin with 't' and end with 'e'. JavaScript, C#, or Dart would be the 
preferred languages to accomplish this. I'll leave it to you to determine 
the best way to submit your work (on a webpage, as an executable, etc). 
I need to be able to execute what you send me, and see your code generate 
its answer(s).  And what would be extremely helpful is if you document the 
problems you ran into along the way and describe how you solved them.
******************************************************************************************
[Netlify Site:](https://hilarious-marzipan-9ca4bc.netlify.app/)
******************************************************************************************
Hoping to incorporate startsWith() and endsWith() methods to check for relevant character
J/k - forgot those methods check first and last characters of entire string. Would need 
to break string into an array of words maybe and iterate with foreach loop to check each word 
individually for each parameter. May look into that more once I have the verbose versions 
of the functions working correctly.
^^ ended up doing that option in the final function I wrote to find instances of words
with T and E.

Refactoring now to see if I can make this a little cleaner. Plan to ditch the initial
little counting functions and whittle down the language to accept parameters rather than
hard coding what each function is specifically trying to match.

I'm currently stuck on refactoring the function that's matching one parameter letter to two
different spots in the words and fiddling with a ternary to complete the return
statement accurately to reflect "start of word" vs "end of word".

Before pushing the return statement further since the logic is wrong I'm reading about 
more methods on MDN that I may not already know about.. kind of considering using 
.includes and also index to try to specify whether the letter is at first index or 
max index ? and have it bump a certain counter variable depending on which index it's at ?

Found out "count = 0" cannot be a global variable or the functions will add into each other :D

I got hung up pushing to figure out a way to make one function cover matching both
first letter or last letter. I didn't want to get too deep into nesting if-statements. And
I couldn't see a clear use case where it would be significantly more beneficial to not have
them be two separate functions. I think this makes okay sense. I'd love to see some other 
people's solutions.

Final branch -> Functions: [src/functions.js](https://github.com/dontcallmeplath/quavered-preamble-parser/blob/clean-up-css/src/functions.js)
Final branch -> Main.js: [src/main.js](https://github.com/dontcallmeplath/quavered-preamble-parser/blob/clean-up-css/src/main.js)
Final branch -> Style.css: [src/style.css](https://github.com/dontcallmeplath/quavered-preamble-parser/blob/clean-up-css/src/style.css)

[Repository](https://github.com/dontcallmeplath/quavered-preamble-parser/tree/clean-up-css)
