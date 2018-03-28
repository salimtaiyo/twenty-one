# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description


                                    <h1> Twenty One </h1>
It is a two player game where players roll a dice and try to reach 21 points. They can roll as many times as they want but if they roll "1" they lose all their points, but they do have an option to hold thier points and the next player gets his/her turn. 

## Wireframes

Include images of your wireframes. 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  | Component | Priority | Estimated Time | Time Invetsted | Actual Time |

| landing page | high | 2hours | :---: | :---: |
| game | V.High |  24hours | :---: | :---: |




## Game Components

### Landing Page
The landing page will have instruction and title of the game 

### Game Initialization
Players will have a button to roll, a button to restart and a button to hold thier points.

### Playing The Game

The players will roll the dice and try reaching 21 points.

### Winning The Game
A "You just Won or Player X Won" modal will popout.

### Game Reset
By pressing a restart button

## MVP 

Include the full list of features that will be part of your MVP 

- roll button
- hold button
- restart button
- two divs on the left and right that displays current score.
- A div in the middle that displays the number rolled. 

## POST MVP

Include the full list of features that you are considering for POST MVP
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

function generateNumber(){
    generates a random number;
}

function holdPoints(){
    holds the point of the current player
}

function playerChange(){
    changes the player
}

function check(){
    checks  the win condition. 
}

<!-- 
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs | -->





## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| random | generates a random number from  1-6 |  


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object