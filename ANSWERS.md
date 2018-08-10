<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT. 

a.) Middleware - The middleware component connects request + response and allows you to implement logic to the request made. 

b.) Sessions -Sessions allow us so store data that we access during requests when you visit a site. The users each have a unique session and this is stored in a cookie, memory, cache, or in a database. 

c.) Bcrypt - Bcrypt incorporates a salt to protect against rainbow tables and allows use to encrypts passwords with hashes. 

d.) JWT - They are used for authorization, information exchange and stored client-side. They consist of a header, payload and signature(which combines the header, payload,algo, and secret).

2.  What does bcrypt do in order to prevent attacks?
Generate salt to prevent rainbow tables and hashes passwords.

3.  What are the three parts of the JSON Web Token?
Header, payload and signature