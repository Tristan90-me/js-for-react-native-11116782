Student ID: 11116782
Overview

This project contains JavaScript functions to manipulate arrays of numbers and strings and create user profiles based on the processed data. The project is divided into four tasks:

Task 1: Array Manipulation
File: `arrayManipulation.js`
Created a function `processArray` that takes an array of numbers as an argument.
The function returns a new array where each even number is squared, and each odd number is tripled.

Task 2: String Formatting Based on Processed Numbers
File: `arrayManipulation.js`
Added a function `formatArrayStrings` that takes two arrays as arguments: an array of strings and an array of numbers processed by `processArray`.
The function modifies each string based on its corresponding number: capitalizing the entire string if the number is even and converting the string to lowercase if the number is odd.

Task 3: User Profile Creation
File:`userInfo.js`
Created a function `createUserProfiles` that takes an array of names and an array of modified names from Task 2.
The function returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).
