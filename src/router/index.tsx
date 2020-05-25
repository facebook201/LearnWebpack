// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

// export default function RouteConfigExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/tacos">Tacos</Link>
//           </li>
//           <li>
//             <Link to="/sandwiches">Sandwiches</Link>
//           </li>
//         </ul>

//         <Switch>
//           {
//             routes.map((route, i) => (
//               <RouteWithSubRoutes key={i} {...route} />
//             ))
//           }
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         <route.component {...props} routes={route.routes} />
//       )>
//     </Route>
//   );
// }