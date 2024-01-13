
### Express Middleware

Middlewares are the functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

Use cases of middleware functions:

- Authorization
- Logging
- Error Handling
- Rate Limiting
- Data validation
- Any business logic

## Error Handler

Error handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

This should be the last function added with app.use(). If not, it may not catch errors from other middleware which are added after it.

Every eroor handle will have access to the 
- status code
- error message
- stack trace





## Tools 

Rest Client Extension for VS Code : Thunder Client




