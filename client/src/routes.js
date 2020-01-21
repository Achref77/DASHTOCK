/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/ListeUser.jsx";
import FormPage from "views/FormPage.jsx";
import PRODUITS from "views/PRODUITS.jsx";
import CLIENTS from "views/CLIENTS.jsx";
import FORNUSSEURS from "views/FORNUSSEURS.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "ListeUser",
    icon: "pe-7s-users",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/FormPage",
    name: "STOCK",
    icon: "pe-7s-server",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/PRODUITS",
    name: "PRODUITS",
    icon: "fa fa-product-hunt",
    component: PRODUITS,
    layout: "/admin"
  },
  {
    path: "/CLIENTS",
    name: "CLIENTS",
    icon: "fa fa-group",
    component: CLIENTS,
    layout: "/admin"
  },
  {
    path: "/FORNUSSEURS",
    name: "FORNUSSEURS",
    icon: "fa fa-truck",
    component: FORNUSSEURS,
    layout: "/admin"
  }
];

export default dashboardRoutes;
