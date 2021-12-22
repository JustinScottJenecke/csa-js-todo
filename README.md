
# ***JavaScript Todo App:***

### *Author: Justin Scott Jenecke*
### *Description: Simple vanilla JS todo app built using:*
    
- Classes
- Static methods
- DOM Manipulation
- JSON
- LocalStorage
- Template Strings
- Events and Event bubbling

<br>

---

# ***App Tips***

First thing to do when developing an app is working out requirements and try to model your app before you start coding

Understand your requirements, map out your classes, functionality, and list of technologies you will use (see example above)

## *Requirements:*

- Use OOPs
- Use Local Storage
- CRUD Tasks
- Use dates for tasks
- Sort Alphabetically
- Add "complete task" functionality
- Refresh task list when App is closed and reopened

## *Break down tasks:*

The next step is to break down the main requirements into physical code that we can write to achieve the requirements

This may seem like an abstract way of doing things, but that is the essentially the point, since this methodology can be 
applied to any real world app, not specifically a todo list

## *Tips:*

Instead of focusing on the DOM aspect, try to get a somewhat functioning JavaScript application before making use of the 
DOM API for simplification

Another tip you can use is instead of attempting to create a function that encompasses one whole set of functionality, maybe
break it up into smaller features and join them together as part of your refactoring/refining of your app
eg: Create a button that refreshes your list / create test tasks and check if strikeout feature works etc.

<br>

---

# ***Skills tested/required to complete:***


### *OOPS*

- Classes
- Getter/Setters
- Object literals

### *Storage API*

- JSON parsing
- save
- read
- understand key/value pairs

### *Data Structures*

- Arrays
- Traversing Array (using Loops)

### *Functions*

- function parameters/arguements
- 1 main functionality per function
- Date/Time API

### *DOM*

- Event Handling
- Updating state/content of DOM elements

<br>

---

# ***App Updates:***

## Lesson 4: 22 December 2021

<br>

**Mistake:**

    Mistakes made during workshop included attempting to use callback function and onclick property when 
    trying to get hold each individual parent element

    The problem with this was it was near impossible to get each individual parent element since it was impossible
    to pass the event object down without using deprecated functionality or adding an event listener to every single
    button when it is created in the create function

    The issue was slightly more complicated than this, but this is a good summary of it

**Fix:**

    Made use of Event Bubbling, so I added a *click* event handler to ul element itelf and bubbled it down to each individual
    button that had a class of *deleteBtn*.

    Through event bubbling I can obtain a reference to any nested/child element that are the target of an event, making it a
    perfect solution to the issue I created for myself.