## Brief Description

This is a single page application according to the provided design with the functionality of transferring money and showing the past transactions in a historical transactions list.

## Functional Requirements

### Transfer Money

As a user I should be able to transfer money using the Transfer Money form as shown in the UI Design.

---

As a User I should be able to:

1. Fill in the "TO ACCOUNT" and "AMOUNT" fields of the form. 
    - Assume that the "FROM ACCOUNT" field is pre-filled with the data shown in the UI Design and is DISABLED.
2. Press "Submit" and preview the entered data.
3. Press "Transfer" on the preview screen. 
    - When transfer is pressed the new transfer should appear at the top of the transactions list, and the balance in the "FROM ACCOUNT" field should have decreased by the amount of the transfer.

Non functional requirements:

- Reset the form to its initial state after the transfer has been completed successfully.
- A User shouldn't be able to transfer money beyond a balance of $ -500.00.

### Transaction History

As a User I should be able to view recent transactions in an ordered list.

As a User I should be able to search my recent transactions by typing a keyword in the search field.

As a User I should be able to sort by recent transactions by Date, Amount and Beneficiary by clicking the corresponding sorting action.

---

As a User I should be able to:

1. View a list of my recent transactions.
    - Mock data is provided in the "mock" folder.
2. See the transactions list updated with the new transaction when a new money transfer has taken place.
3. Filter the transactions list by typing a keyword in the Search field.
    - The transactions list should update immediately at every keystroke.
4. Clear the filter by clicking an 'x' icon in the Search field.
4. Sort the transactions list by Date, Beneficiary and Amount.

Non functional requirements:

- The Sorting order (ascending/descending) should be persistent across all sorting options

## Technology Description

- Application was developed in Angular 1.5.0
- You can run the Application by opening the "index.html" file.
- UI is Responsive.
- For this app I didn't used any scaffolding tools, like yeoman or boilerplate templates.

## Helpful Information

- The design to be developed is provided as a PNG for quick reference in the "design" folder.
- Images and icons are in the assets folder. Transaction images are provided as base64 images in the transaction JSON.
- The font for the UI Design can be found on Google fonts: https://fonts.google.com/specimen/Kanit
- Database is managed with Firebase.
