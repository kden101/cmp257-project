SupplyLink Web Project
Overview

SupplyLink is a front-end demo web system that simulates a supply chain and order management platform.
It includes customer and admin interfaces for placing orders, tracking production, managing suppliers, and viewing reports.
All pages are static — there is no backend or database connection. The project is purely for layout and UI demonstration.

How It Works
1. Starting the Project

Open Welcome.html — this is the homepage and entry point.

From here, users can navigate to login, signup, or informational pages.

2. Customer Access

Customers can sign up using signup.html or log in using login.html.

After logging in, they are directed to the Customer Dashboard (customer_dashboard.html).

Customer Features:

Dashboard (customer_dashboard.html)
Displays an overview of the customer’s profile and activity.

Place New Order (place_order.html)
Customers can fill in details to create a new order (form-based demo only).

Track Orders (trackorder.html)
Shows an order progress timeline with stages such as:

Materials Ordered

In Production

Quality Check

Shipped

Order History (orderhistory.html)
Displays previous orders in a table with an option to view a detailed timeline in a modal window.
Data is static and preloaded for display only.

3. Admin Access

Admins log in through admin login.html.

Upon successful login (simulated), they are redirected to Admin_Dashboard.html.

Admin Features:

Dashboard (Admin_Dashboard.html)
Shows key statistics: active orders, pending supplier orders, products in production, and completed orders.
Data is static and not fetched from any backend.

Manage Orders (Manage_Order.html)
Displays a mock-up of customer orders.
Admins can view, update, or change order statuses (no backend logic).

Production Log (production_log.html)
Tracks orders currently in production.
Each entry shows stage, progress notes, and a “Complete” button to mark orders as finished.

Suppliers (suppliers.html)
Allows admins to record raw material orders.

Select material, quantity, supplier, and delivery date.

Adds the new order to a visible table.

Orders can be marked as “Delivered.”
Order IDs are auto-generated using JavaScript.

Reports (reports.html)
Displays business analytics using JavaScript-generated charts:

Orders per Month

Supplier Performance

Quick Statistics

Top Products

Charts are built using HTML, CSS, and JavaScript only — no external chart libraries.

4. Styling and Framework

All pages use Bootstrap 5.3 for layout and responsiveness.

Custom stylesheets control the look and theme of each section:

Welcome.css

login.css

cust_styles.css

track_order.css

The color scheme follows muted industrial tones such as:

Gray: #706677

Muted Pink: #A6808C

Soft Beige: #CCB7AE

Off-White: #D6CFCB

5. JavaScript Functionality

JavaScript files are used to simulate interactivity:

auth.js – Handles login/signup form actions.

trackorder.js – Controls the order tracking step indicators.

production_log.js – Updates production progress.

suppliers.js – Manages supplier order creation and status.

reports.js – Generates static charts and summary data.

6. Summary of Flow

Welcome.html → Homepage

signup.html or login.html → Customer login

admin login.html → Admin login

Customer Dashboard → Access order, track, and history pages

Admin Dashboard → Manage orders, production, suppliers, and reports

Hibah:

Welcome.html
Welcome.css

Get_A_Quote.html

Customer_Service.html

Admin_Dashboard.html

signup.html

Manage_Order.html

Khadijo:

 
suppliers.html
suppliers.js

production_log.html
production_log.js

reports.html
reports.js
Farah:

customer_dashboard.html

Admin Login.html

login.html
login.css

Manage_Order.html

auth.js

Maaziya:
cust_styles.css

orderhistory.html
orderhistory.css
orderhistory.js

place_order.html
place_order.css
place_order.js

trackorder.html
track_order.css
trackorder.js