## Create a Task List with a "Remove" Button

### Objective:
In this activity, you’ll extend the task list we worked on together by adding a ```Remove``` button next to each task. When the button is clicked, it should remove the corresponding task from the list.

### Instructions:

1. **Create a ```Remove``` Button:**

    After adding a task to the list, create a ```Remove``` button next to it. This button will allow the user to remove the task from the list.

2. **Add Event Listener to the Button:**

    Attach an event listener to the ```Remove``` button so that when it is clicked, the corresponding task (list item) is deleted from the list.

3. **Clear the Input Field:**

    Make sure the input field is cleared after each task is added, so it’s ready for the next task.

Example of Final Result:

<div align="center">
  <img src="./assets/result.png" alt="result" width="300"></div>


### Hints:

- You’ll need to create a new ```<button>``` element for each task added.
- Use ```appendChild() ```to attach the ```Remove``` button to the task.
- Use ```removeChild()``` to delete the task from the list when the button is clicked.
- Don’t forget to attach the event listener to the remove but`ton after it’s created!