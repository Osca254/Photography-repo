# Artisty
 A simulation of an Application that you can make order on place bookings on photoshoots, you can as well view some of the past artistic work.

 **End Results**
 Click the link : https://photography-repo.vercel.app/

 # Description 

 **Details**
Artsty is a single page application with a well structured layout, where you can view both information of the web and make order by adding items to cart.

The application lets you view both the names and images of each products then gives you the flexibility to add between one to 10 items to the cart at once with a single button click.

The Cart button located at the navbar in the header section, this buttons contains a counter in a badge, which counts the number of items in the cart an if there are no items in the cart, it displays 0. For a better user experience on the frontend of the application, the button undergoes a subtle bump whenever an item has being added to the cart.

All navbar links are functioning, on clicking them, they scroll you to the respective sections in the page.

**Technologies**

Technologies i used to build this are  React.js, Css, react-bootstrap, react-scroll, animation on scroll library, sweetalert.js library

I used React.js framework to bootstrap this project because of the limitless functionalities and flexibilities it brings to me, examples of the these are : 

- useContext hook which i used this to manage the state of some components in my application which includes the functioning cart system
- Props to pass some data from component to component with ease.
- Access to 3rd party libraries that made the app much better like react-scroll and react-bootstrap, 

I then used animation on scroll for the scroll animation and sweetalert for the order validation.

**Challenges**

The challenge i faced while building was using useContext to manage the app wide state, becausei am more familiar with redux and redux toolkit for managing state.

**Features to be added**

This is the version 1.0 of the arts web application but i hope to improve the app and make it even better in future versions. The features i will love to add are :

- A checkout form
- Implement a dummy flutterwave payment gateway
- Store user order in firebase
- Making the code more cleaner and improving the user experience.
- Css modules to prevent clashing of class names across components
# Installation and Running

git clone or pull the project in your terminal, open the project folder on your local laptop in a code editor and run  'npm install' to install all dependencies required for the app to run, "npm start" in your editors terminal.