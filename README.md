# Welcome To The Jumble
This is a one-page web application that implements two simple cipher (encryption) algorithms. \
## Caesar Cipher
In this encryption method, each letter from the input text is shifted forward in the alphabet some number of times.\
 The number of times to shift is controlled by the slider. A shift of zero would result in the plaintext being identical\
to the ciphertext. A shift of 26 would result in the same thing, because the shift should wrap around when it reaches the end of the alphabet,\
and the English alphabet has 26 characters. However, say the shift value was 3, and the plaintext was CSC. The letter F comes three letters after\
C and the letter V comes three letters after S. Thus, the ciphertext would be FVF.

It only translates alphabetical characters and skips white space, punctuation, and digits.

## Square Cipher
In cryptography, there is a cipher algorithm known as the two square cipher. Here, I have implemented a simplified version of this, called the “square cipher.”
The KEY for this cipher is a 5x5 grid of text. Since a 5x5 grid only supports 25 of the 26 letters of the alphabet, I have not included Z. For the purposes of this cipher, a Z in the plaintext translates to the Z in the ciphertext. For all other alphabetical characters, takes the position of that character in the regular alphabet, and translates it to the character at the corresponding position in the grid.

As with the Caesar cipher, it skips whitespace, punctuation, and digits.
