# flashcard-generator

## Overview

* This is a basic flashcard constructors users to view two types of flashcards:
    * **Basic** flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").
    **Cloze-Deleted** flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

**Cloze Deletions**

A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:

*"George Washington was the first president of the United States."*

...We can create a "cloze deletion" by removing the words "George Washington":

*"... was the first president of the United States."*

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.

* BasicCard constructor accepts two arguments: `front` and `back`.
    * front property contains the text on the front of the card
    * back property contains the text on the back of the card.

* ClozeCard constructor accepts two arguments: `text` and `cloze`.
    * fullText contains only the full text
    * cloze property contains only the cloze-deleted portion of the text

ClozeCard constructor has a `partial` property that contains only the partial text.

## Examples ##

 constructors work as follows.

```javascript
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
```