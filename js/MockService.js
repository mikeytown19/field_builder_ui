var FieldService = {
  getField: function (id) {
    return {
      label: "Sales region",
      required: false,
      choices: [
        "Asia",
        "Australia",
        "Western Europe",
        "North America",
        "Eastern Europe",
        "Latin America",
        "Middle East and Africa",
      ],
      displayAlpha: true,
      default: "North America",
    };
  },
  saveField: function (fieldJson) {
    // Add the code here to call the API (or temporarily, just log fieldJson to the console)

    console.log(fieldJson, "inside Mock Service");
  },
  postForm: function (fieldJson) {
    const post = async () => {
      try {
        const response = await fetch(
          "http://www.mocky.io/v2/566061f21200008e3aabd919",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(fieldJson),
          }
        );
        const data = await response.json();
        console.log(data, fieldJson);
      } catch (error) {
        console.log(error, "error");
      }
    };
    post();
  },
};

export { FieldService };

// [x] The project is to create a control to modify the properties of a multiple choice field. It’s not necessary to have the control actually build a multiple choice field; assume that functionality is handled by a service and you just need to interact with its APIs.

// [ x ]  If the default value is not one of the choices, it should be added to the list of choices when the field is saved.
// .   . [x] The control should be able to add a new choice to the list of choices.
//
// [ x ]  Add a button that allows the builder to clear the form and start fresh.
// [ x ] The submit button should create a json object and post it to http://www.mocky.io/v2/566061f21200008e3aabd919. It should also log the post data to the console. You can add a function to FieldService in MockFieldService.js to accomplish this, but everything is up to you. Feel free to modify or change anything you would like as long as it meets the minimum requirement of posting json data to the back-end endpoint.
// [x]  form validation
// [x]  label field required
// [x]  form submission message

// [x] The database that stores this does not allow individual choices in the list of choices to be longer than 40 characters. Add client-side validation such that excess characters are visually distinct if the choice is longer than 40 characters. I.e., if a user enters the word that is longer than 40 characters, the characters above 40 would be highlighted in red.

// Bonus / Stretch tasks

// [] Allow the form to be responsive and work on mobile devices in addition to desktop.

// [x]  Have you ever closed the browser accidentally when working on something? Yeah, me too. Let's help the user out by populating the form with the input they were working on if they accidentally close the browser.

// [x] Refactor the button component such that it could be used by other developers and maintain the same style and behavior (e.g., for a custom component library). For example, let's say we want all of our submit buttons to show a loading indicator after they are clicked. How could we create a component that has that behavior that would be shared across all instances of the submit button?
