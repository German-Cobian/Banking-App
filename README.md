# Banking-App


A how-to on building a basic React-Redux app. The user can deposit a hundred dollars at a time to a purported bank account,

![Start at 300](/public/300.png?raw=true "Start at 300")
![Deposit 100](/public/400.png?raw=true "Deposit 100")

...or withdraw the same amount.

![Start at 400](/public/400.png?raw=true "Start at 400")
![Withdraw 100](/public/300.png?raw=true "Withdraw 100")

The project is based on the tutorial video [React Redux (with Hooks) Crash Course](https://www.youtube.com/watch?v=9jULHSe41ls) by "Laith Harb."


## Built With

* HTML
* CSS
* Javascript
* React
* Redux


## Getting Started

### Setup and Install

To get a local copy up and running follow these simple example steps:

* Open your terminal - Windows: Win + R, then type cmd | Mac: Command + space, then type Terminal
* Navigate to a directory of your choosing using the cd command
* Run this command in your OS terminal: `git clone git@github.com:German-Cobian/Banking-App.git` to get a copy of the project
* Navigate to the project's directory using the cd command
* In the clone folder, run `npm install` and then `npm run build`
* To fire up the server run npm start

### Breakdown of Tutorial

The feature branches of the tutorial present versions of the app where specific components or functions
were implemented. 

* `reducers-store` Implements the reducers for deposit and withdrawal and combines them into a single reducer / Implements store which receives the combined reducers.

* `providers-selectorHook` Imports the provider so that every single component can access store / Implements the useSelector hook so as to acces the state in the store.

* `action-creators` Implements the action creators so as to dispatch the  withdraw and deposit actions / Implements bindActionCreators method to do just what the name suggests as well as the useDispatch hook so that these actions are passed on to the reducers and update store in accordance with the actions.

* `apply-middleWare` Import thunk middleware to help redux work with asynchronous requests and applies it to store


## Authors

👤 **German Cobian**

* GitHub: [@German-Cobian](https://github.com/German-Cobian)
* Twitter: [@GermanCobian2](https://twitter.com/GermanCobian2)
* LinkedIn: [@german-cobian](https://www.linkedin.com/in/german-cobian/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/German-Cobian/Banking-App/issues).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

The project is based on the tutorial video [React Redux (with Hooks) Crash Course](https://www.youtube.com/watch?v=9jULHSe41ls) by "Laith Harb."


## 📝 License

This project is [MIT](https://github.com/German-Cobian/Banking-App/blob/main/LICENSE) licensed.
