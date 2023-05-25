# Tehnologies Used

1. MongoDB : A reliable and scalable database solution for storing task details, user information, and reference records.
2. Express.js : A powerful web application framework for building robust and efficient backend APIs.
3. Node.js : A runtime environment for executing server-side JavaScript code built on Chrome's V8 Engine.

# Packages Installed

1. [cors](https://www.npmjs.com/package/cors)
2. [dotenv](https://www.npmjs.com/package/dotenv)
3. [express](https://www.npmjs.com/package/express)
4. [mongoose](https://www.npmjs.com/package/mongoose)

# Packages Breakdown

*cors* - CORS (Cross-Origin Resource Sharing) is a web security mechanism that allows web browsers to enforce restrictions on cross-origin HTTP requests to ensure safer communication between different domains.

*dotenv* - dotenv is a package or library used in software development to load environment variables from a specific file, typically ".env", into the application's runtime environment.

*express* - Express is a minimal and flexible web application framework for Node.js that simplifies the process of building robust and scalable web applications by providing a set of intuitive and powerful features.

*mongoose* - Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB, providing a straightforward and schema-based solution for managing application data, including data validation, query building, and middleware support.

# Backend Routes

👉`GET/tasks` - Gets all the tasks assigned by the Admin.
👉`GET/references` - Gets all the reference materials that were assigned by the Admin.
👉`GET/data` - Gets all the To-Do items that were self-assigned by the Students.
👉`POST/tasks` - Allows Admins to create a new task for the Students.
👉`POST/references` - Allows Admins to create a new reference item which the Students can use for building their profile.
👉`POST/data` - Allows Students to add self-assigned tasks.
👉`DELETE/tasks/:id` - Allows Admins to delete a task that was assigned to the Student.
👉`DELETE/references/:id` - Allows Admins to remove a reference material.
👉`DELETE/data/:id` - Allows Students to check(delete) a self assigned task.
