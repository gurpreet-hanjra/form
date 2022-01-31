# Form component

Reusable form component.

### API decisions

- Declarative: `<Form handleSubmit={callback}></Form>` Decalative API, just wrap inputs in Form component and pass callback to get data.
- Easy to use: - No learning curve, passed HTML inputs and form is ready. HTML forms are already known to the developers.
- Based on HTML forms: Use HTML attributes as is, type, value, placeholder ...
- Performant: Uses uncontrolled components, results in data stored using ref (not in component state) and causes no re-renders on input change or other events.
- Easy to port: Future proof, incase in future we need to switch to Vue, Angular or even vanilla JS. Minimal effort would be required to port.
- Self contained: Multiple `Form` components can be used in a single parent component. All data is managed natively by the form and just callback is required to get form data out of it.
- Flexible: pass on options and validation as is, no specific function/props would be required.


### Notes

- Output can be run by `npm i` and `npm start`
- Output demoes 3 modes. a) Prefilled and add/edit inputs based on consitions. b) Form creation from external data, like from API response and render accordingly. c) custom validation using native HTML input pattern attribute. (passed pattern may not be correct, so can be tried out with needed regex)
- CSS is just to making things presentable.
- Very basic Warn notification in case consumer missed required props to make form correctly render (though TS warns early). Under assumption that Form component would be used among different teams and might be packaged as npm module etc, so it's crucial for developer experience to notify users about things missed/incorrect.
- Tests only include when callback is called on form submit, because form change and submission are native events and we don't need to test it. And also Warn module is out of scope.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
