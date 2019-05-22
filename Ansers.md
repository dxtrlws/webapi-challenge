- [ ] Mention two parts of Express that you learned about this week. 
- I learned about express.Router and express.json
- [ ] Describe Middleware?
- Middleware is what runs between two parts of code. We use them in route handlers to do something with our code before handing it off to the req and res

- [ ] Describe a Resource?
- A resource is something we can bring into a project from an external source. That can be anything from third party middleware or helper functions that we import into other files.

- [ ] What can the API return to help clients know if a request was successful?
- An API can return browser status codes like 200 to let the client know that an API call was successful or not. 

- [ ] How can we partition our application into sub-applications?
- We can modularize our applicaiton by breaking different parts of the app into different pieces. You can do this by doing things like moving reusable custom middleware from a routes file into it's own middleware folder.