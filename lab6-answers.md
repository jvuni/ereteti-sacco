# Lab 6 — my answers

Name: Johannes Vadera · Admission number: 226806

1. In process-delivery.php, the browser already checks the member number.
   Why does PHP check it again? Name one way the browser's check can be skipped.

Answer: Even though `js/main.js` checks the member number pattern on the page and blocks submission if it looks wrong, anything running in a visitor's browser can be bypassed or tampered with. `process-delivery.php` checks the format again on the server so bad data never reaches the database, and it also queries the `farmer` table to verify that the member number actually belongs to a real farmer. Someone could easily skip the browser check by turning off JavaScript and removing the `required` attribute from the member input in their browser's developer tools before submitting.


2. In my INSERT, bind_param has the letters 'issd'. What does each letter
   stand for, and which value does it go with?

Answer: The letters `'issd'` tell MySQL the data type of each value being bound to the placeholders in order. The `i` stands for integer and pairs with `$farmer['farmer_id']`, the first `s` stands for string and pairs with `$date`, the second `s` is also a string and pairs with `$session`, and the `d` stands for double (a decimal number) and pairs with `$litres`.

3. Why is Delete a small form sent by post, while Edit is a link?

Answer: Clicking Edit (`edit-delivery.php?id=...`) only fetches an existing delivery to fill out the edit form without changing anything yet, so a regular `GET` link is safe to use. Deleting immediately removes a record from the database, and `GET` links should never alter or erase data. Making Delete a small `POST` form protects against accidental deletions from browser link preloading, search crawlers, or someone clicking a manipulated link.


4. Someone opens deliveries.php?date=' OR '1'='1 on my site.
   What happens, and why does my prepared statement not run it as SQL?

Answer: PHP reads `' OR '1'='1` as a plain text string and looks for deliveries on that exact date. Since no date matches that text, the query safely returns zero rows without causing an error or exposing other records, and the page simply reports zero deliveries for the day. The prepared statement prevents SQL injection because `mysqli_prepare()` sends the SQL structure (`WHERE d.delivery_date = ?`) to MySQL first, and `mysqli_stmt_bind_param()` sends the user's input separately as a string value, so MySQL treats the quotes and `OR` strictly as literal text rather than SQL commands.
