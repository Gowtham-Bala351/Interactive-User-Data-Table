HTML Code:
.The HTML code defines a webpage with a form in the center.
.The form includes four input fields for first name, last name, email, and age.
.A submit button labeled "ADD" is present at the bottom of the form.
.Another table is defined below the form with headers for "Firstname", "Lastname", "Email", and "Age". This table will be used to display the submitted data.
JavaScript Code:
.The JavaScript code defines four empty lists (list1, list2, list3, and list4) to store the entered data for first name, last name, email, and age, respectively.
.A function named printdetails is defined to handle the form submission.
.When the submit button is clicked, this function is called.
Inside the function:
.It retrieves the values from the input fields using their IDs.
.It stores the retrieved values in the corresponding lists.
.It accesses the table element with the ID "display" and creates a new row.
.It creates four cells within the new row.
.Finally, it assigns the retrieved values from the lists to each cell's inner HTML content, effectively displaying the entered data in the table.
.Variables x and n are used as counters to keep track of the list indices and row insertions.
