

HTML FILES:
- Welcome.html (Homepage)
- login.html (Customer Login)
- admin login.html (Admin Login)
- signup.html (Registration)
- customer_dashboard.html (Customer Dashboard)
- Admin_Dashboard.html (Admin Dashboard)
- place_order.html (Place New Order)
- trackorder.html (Track Orders)
- orderhistory.html (Order History)
- Manage_Order.html (Manage Orders - Admin)
- production_log.html (Production Log - Admin)
- suppliers.html (Supplier Orders - Admin)
- reports.html (Reports & Analytics - Admin)

CSS FILES:
- Welcome.css (Main styles)
- login.css (Login/Signup styles)
- cust_styles.css (Customer dashboard styles)
- track_order.css (Track order styles)

JAVASCRIPT FILES:
- auth.js (Login/Signup handling)
- trackorder.js (Order tracking)
- production_log.js (Production management)
- suppliers.js (Supplier orders)
- reports.js (Charts and analytics)

HOW TO USE:
-----------

1. Start at Welcome.html
2. Sign up at signup.html or login at login.html
3. For admin access, use admin login.html

CUSTOMER PAGES:
- Dashboard: View overview
- Place Order: Create new orders
- Track Orders: Monitor order status
- Order History: View past orders

ADMIN PAGES:
- Dashboard: Admin overview
- Manage Orders: Handle customer orders
- Production Log: Track production progress
- Suppliers: Manage supplier orders
- Reports: View analytics and charts

IMPORTANT:
----------
- All auth.js must be linked to login pages
- Bootstrap 5.3 is required (CDN links included)
- No database or backend - demo purposes only



=======================================
  SUPPLIERS, PRODUCTION LOG & REPORTS
=======================================

SUPPLIERS PAGE (suppliers.html):
---------------------------------
What it does:
- Admins can order materials from suppliers
- Add new supplier orders for raw materials
- Track delivery status of materials

How to use:
1. Select material (Steel Sheets, Aluminum Bars, Copper Wire)
2. Enter quantity in kg
3. Choose supplier (ABC Metals Ltd, Global Supplies Co, Prime Materials Inc)
4. Pick delivery date
5. Click "Add" button
6. New order appears in the table below
7. Mark orders as "Delivered" when they arrive

Features:
- Random order ID generated automatically
- Shows current orders in a table
- Can mark orders as delivered with checkmark button


PRODUCTION LOG (production_log.html):
--------------------------------------
What it does:
- Track production progress for customer orders
- Monitor which stage each product is in
- Mark production jobs as complete

How to use:
1. View table of orders in production
2. See order ID, product name, start date
3. Check current stage (Quality Check, Assembly, Cutting, etc.)
4. Read notes about progress
5. Click "Complete" button when production is done
6. Status changes to "Completed!"

Features:
- Shows all orders being manufactured
- Displays production stage for each order
- Notes field for extra information
- One-click completion button


REPORTS PAGE (reports.html):
-----------------------------
What it does:
- View analytics and performance data
- See charts showing business trends
- Quick statistics overview

Features:

1. Orders per Month Chart (Bar Chart):
   - Shows orders from June to November
   - Visual bars showing order volume
   - Easy to see which months were busiest

2. Supplier Performance Chart (Horizontal Bars):
   - Shows how many orders from each supplier
   - ABC Metals (35 orders)
   - Global Co (28 orders)
   - Prime Inc (22 orders)

3. Quick Statistics:
   - Orders This Month: 42
   - Average Delivery Days: 4.5
   - In Production: 8
   - Completed Orders: 34

4. Top Products List:
   - Metal Frame A (24 orders)
   - Aluminum Panel (18 orders)
   - Copper Component (12 orders)

How charts work:
- Charts are built with pure JavaScript
- No external chart libraries needed
- Bars are created using HTML elements and CSS
- Heights/widths calculated based on data values

=======================================

=======================================