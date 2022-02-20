# ToDo Task Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task

Create a ToDo List Application. You are free to use any frameworks and libraries.

## Functional requirements

### Basic requirements

- Availability to create an ToDo entry
- ToDo entry can be marked as Done and Undone
- ToDo entry can be deleted

### Advanced requirements

- Change postions of ToDo entries by Drag and Drop
- Archive / Unarchive ToDo entries, Show Archived and Unarchived ToDo entries

### More advanced requirements

- Show Login Page
- Show List of Groups and availablity to select group where the ToDo entry will be created
- Use Routing for all Pages also for ToDo entries
- TypeScript Typings
- Search entries and change order

## API

There are file called `api.ts` with function to store data in `inopai.com`.

`login()`

Before performing any action with API, you have to login first.

```typescript
// login with authentication data from .env file
await login();

// for login with email and password
await login(email: string, password: string);
```

`logout()`

Logout function

```typescript
await logout();
```

`checkLogin()`

To check if user is logged in

```typescript
await checkLogin();
```

`entrySearch()`

Load existing entries from API

```typescript
// Load entries from group defined in .env file
await entrySearch();

// Load entries from given group
await entrySearch(groupId: number);
```

`entryCreate()`

Create new ToDo entry

```typescript
// Create ToDo entry in group defined in .env file
await entryCreate("Buy an Apple");

// Create ToDo entry with position
await entryCreate(title: string, position: number);

// Create ToDo entry in group given group
await entryCreate(title: string, position: number, groupId: number);
```

`entryUpdate()`

Update the ToDo entry

```typescript
// Update ToDo entry in group defined in .env file
await entryUpdate(entryId: number, title: string, done?: boolean);

// More advanced
await entryCreate(
    entryId: number,
    title: string,
    done?: boolean,
    position?: number,
    archived?: boolean,
)

```

`entryDelete()`

Delete the ToDo entry

```typescript
// Update ToDo entry in group defined in .env file
await entryDelete(entryId: number);
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
