import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
      {
          "Name":"ZAC Online Store",
          "Intro":"An online store developed using PHP.",
          "Technology":"PHP v5.6.25, MVC, MySQL, Javascript, AJAX, CSS.",
          "Description":"A website for an imaginary store called ZAC. The website was developed using PHP. The project was developed with a view to learning how e-commerce works. E-commerce projects are a fundamental building block for learning web development since they include intense use of database and complex queries. Also, designing the website in a user friendly way was focussed during development. The project contains all the features that must be included in an online store, from ordering products to admin panels to handle the orders. In addition we included account types like accountant, salesman and marketer. Each account type's role is more or less self explanatory- accountant tracks total sales and generates report that can be printed in .pdf format, salesman receives/confirms orders, marketer is in charge of promoting products by focussing products on home page and providing advertisements. The website also has search option available with dynamically provided suggestions. This project was completed within 2 months of duration by three members with me being the team leader and main designer of the overall architecture of the project.",
          "Link":"https://github.com/ashfaqadib/zac",
          "activeImg":
          {
              "src":"assets/Projects/ZAC/1HomePage.PNG",
              "desc":"Home page"
          },
          "images": [
            {
              "src":"assets/Projects/ZAC/2 Login.PNG",
              "desc":"Login Page"
            },
            {
              "src":"assets/Projects/ZAC/3 Account Information.PNG",
              "desc":"Customer's Account Information"
            },
            {
              "src":"assets/Projects/ZAC/4 Order History.PNG",
              "desc":"Customer's Order History"
            },
            {
              "src":"assets/Projects/ZAC/5 Product View.PNG",
              "desc":"Product's Detailed View"
            },
            {
              "src":"assets/Projects/ZAC/6 Cart.PNG",
              "desc":"Cart"
            },
            {
              "src":"assets/Projects/ZAC/7 Admin's Manage Product.PNG",
              "desc":"Admin's Products Management Panel"
            },
            {
              "src":"assets/Projects/ZAC/8 7 Admin's Manage Orders.PNG",
              "desc":"Admin's Orders Management Panel"
            },
            {
              "src":"assets/Projects/ZAC/9 7 Admin's Manage Accounts.PNG",
              "desc":"Admin's User Accounts Management Panel"
            },
            {
              "src":"assets/Projects/ZAC/10 Accountant's Orders view.PNG",
              "desc":"Accountant's Orders/Sales View"
            },
            {
              "src":"assets/Projects/ZAC/11 Accountant's Prepare Report view.PNG",
              "desc":"Accountant's Report Preparation Panel"
            }
          ]
      },
      {
        "Name":"Fast-Food",
        "Intro":"A food delivery web application developed in ASP.NET.",
        "Technology":"ASP.NET, Entity Framework, MVC, MS SQL Server, Repository Pattern, jQuery, Java Script, AJAX, Bootstrap, CSS.",
        "Description":"Fast-Food is a website for delivering foods from various restaurants to customers depending on their location. Using Google Maps API, the user’s location is collected and nearby available restaurants are shown around a certain radius from the user. The circle of area to cover for showing nearby restaurants is determined by the admin. When a user places an order, the person in charge of the associated restaurant’s account has to confirm the order. After confirmation, the order is ready for pickup for a transporter and a token number is generated and is provide to the customer. A transporter on the move can filter out nearby available orders for pickup by changing the radius of his area of interest. Transporter’s location is also tracked using Google Maps API. Upon delivery, the transporter collects the token number from the customer and has to input that number to confirm his task. Tasks completed and cancelled by the transporters are tracked for performance review.",
        "Link":"https://github.com/ashfaqadib/fastfood",
        "activeImg":
        {
            "src":"assets/Projects/Fast-food/1 Customer home page.PNG",
            "desc":"Home page for customers and public."
        },
        "images": [
          {
            "src":"assets/Projects/Fast-food/2 manual location selection.PNG",
            "desc":"Manually select location in case of wrong auto detection."
          },
          {
            "src":"assets/Projects/Fast-food/3 Nearby restaurants.PNG",
            "desc":"Showing available nearby restaurant."
          },
          {
            "src":"assets/Projects/Fast-food/4 Restaurant menu and dynamic cart.PNG",
            "desc":"Restaurant menu and cart."
          },
          {
            "src":"assets/Projects/Fast-food/5 Cart view.PNG",
            "desc":"Cart's detailed view."
          },
          {
            "src":"assets/Projects/Fast-food/6 Reviews.PNG",
            "desc":"Read/Write reviews and post comments."
          },
          {
            "src":"assets/Projects/Fast-food/8 Restaurant Home.PNG",
            "desc":"Home page for a restaurant's account. Currently showing one pending order."
          },
          {
            "src":"assets/Projects/Fast-food/9 Transporter home.PNG",
            "desc":"Home page for a transporter's account. Showing one available order nearby for pickup."
          },
          {
            "src":"assets/Projects/Fast-food/10 Transporter home 2.PNG",
            "desc":"Home page for a transporter's account. Showing one task currently active."
          },
          {
            "src":"assets/Projects/Fast-food/11 Transporter Task history.PNG",
            "desc":"Transporter Task history."
          },
          {
            "src":"assets/Projects/Fast-food/12 Admin Home.PNG",
            "desc":"Admin panel."
          },
          {
            "src":"assets/Projects/Fast-food/13 Admin Statistics Report.PNG",
            "desc":"Admin can see statistics reports."
          },
          {
            "src":"assets/Projects/Fast-food/14 Admin Activity Report.PNG",
            "desc":"Admin can see users activity reports."
          },
          {
            "src":"assets/Projects/Fast-food/15 Admin Sales Report.PNG",
            "desc":"Admin can see sales reports."
          }
        ]
      },
      {
        "Name":"Mountain Hike",
        "Intro":"An endless-runner game developed in Unity.",
        "Technology":"Unity Game Engine, C#.",
        "Description":"The game was developed in Unity for PC with scripts written in C#. To build score, the player has to avoid both moving and still obstacles. Dynamic day-night cycle was implemented for bringing variety in gameplay. Also, the weather changes from time to time and the difficulty increases as the player builds up score. The obstacles are generated randomly during runtime. The project was developed for learning purpose and to get familiarized with game development using game engines. The scripts were written solely by me with the help from various sources in the internet.",
        "Link":"https://github.com/ashfaqadib/mountainhike",
        "activeImg":
        {
            "src":"assets/Projects/Mountain Hike/Screenshot 1.png",
            "desc":"Main Menu"
        },
        "images": [
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 2.png",
            "desc":"Controls"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 3.png",
            "desc":"Gameplay screenshot"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 4.png",
            "desc":"Gameplay screenshot"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 5.png",
            "desc":"Gameplay screenshot"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 6.png",
            "desc":"Game over screen"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 7.png",
            "desc":"Pause menu"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 8.png",
            "desc":"Gameplay screenshot"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 9.png",
            "desc":"Gameplay screenshot"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 10.png",
            "desc":"Gameplay screenshot"
          },
          {
            "src":"assets/Projects/Mountain Hike/Screenshot 11.png",
            "desc":"Starting screen"
          }
        ]
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
