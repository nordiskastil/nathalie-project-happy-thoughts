# Happy Thoughts

- Brief description of the assignment
Build a happy thoughts messaging app using React state. Using a API with three endpoints. Later, in your code which handles the form submission, you could have something which looks like this to send the new message, get the response from the API, and then add it to the thoughts array:


- How you approached the task, what tools and techniques you used, and how you planned it
I first used useEffect to Fetch the lasted thoughts from API. Than the handleFormSubmit that is called when the user submits the form and prevents the page from refreshing on form submit. Checking the lenght and then updates the thoughts state with the new thought. I added a floating heart animation when a user sends a new thought. The seperat component ThoughtCard.jsx makes it easier to reuse and creates less code in App.jsx. 

Then I added the CSS trying to make the page look like the exempel. 

Avoids double-submitting.
- If you had more time, what would be next?
I would like a animation with more hearts, but this was already a challenge. 

- How to run the project locally

## View it live



## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
