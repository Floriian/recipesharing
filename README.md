# <p align="center">Recipe Sharing</p>

A simple recipe sharing app, with PNPM workspaces, and Turbo.

The backend is located under the "apps/api" folder, and the frontend located in "apps/web" folder.

Shared types folder under "libs/types" folder.

In frontend theese are the main packages:

<ul>
<li>Redux</li>
<li>shadcn/ui</li>
<li>TailwindCSS</li>
<li>Auth0</li>
</ul>

And on the backend

<ul>
<li>@nestjs/mongoose</li>
<li>Auth0</li>
</li>

## Authentication flow

The authentication flow is very simple.

When you signup in the fronend app, you got redirected to auth0 signin page.
If login successful, then you get redirected back to frontend app. After you got redirected to the frontend app, it retrieves data from auth0 api, and send state to redux. If you make an API call, which was is protected axios sets headers from redux state via axios interceptors. The API check if JWT token is valid. If valid it handles the request.

Here is the basic chart (not including the controller layer):
![Chart](https://i.imgur.com/K6fw553.png)
