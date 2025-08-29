//layout of app
# Features
- Login/Sign Up
  - Sign In / Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists * N
- NetFlixGPT
  - Search Bar
  - Movie Suggestions



##fully project setup

1. Create a React App with Vite
  ```bash
   npm create vite@latest my-app
   ```

2.Navigate to Project & Install Dependencies
 ```bash
   cd my-app
   npm install
   ```
3. Setup Tailwind CSS
   ```bash
   npm install -D tailwindcss @tailwindcss/vite
   ```

   Update vite.config.js:
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
   plugins: [react(), tailwindcss()],
   })
   ```

   update index.css
   ```css
   @import "tailwindcss"
   @tailwind utilities;
   ```
  
4. Install Redux Toolkit & React Redux
  ```bash
   npm install @reduxjs/toolkit react-redux
   ```


   //how to manage redux

5. Setup Redux Store

    Create src/app/store.js:
    ```js
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from '../features/counterSlice'
    
    export const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    })
    ```

6. Create a Slice

    src/features/counterSlice.js
    ```js
    import { createSlice } from '@reduxjs/toolkit'

     const initialState = {
       value: 0,
     }
     
     const counterSlice = createSlice({
       name: 'counter',
       initialState,
       reducers: {
         increment: (state) => { state.value += 1 },
         decrement: (state) => { state.value -= 1 },
         incrementByAmount: (state, action) => { state.value += action.payload },
       },
     })
     
     export const { increment, decrement, incrementByAmount } = counterSlice.actions
     export default counterSlice.reducer
    ```
⚡ 7. Provide Store to App

    Edit main.jsx:
    ```js
    
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    
    import { Provider } from 'react-redux'
    import { store } from './app/store.js'
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <App />
      </Provider>
    )
```
8. Use Redux in a Component

   src/App.jsx
   ```js
   import { useSelector, useDispatch } from 'react-redux'
   import { increment, decrement } from './features/counterSlice'
   
   function App() {
     const count = useSelector((state) => state.counter.value)
     const dispatch = useDispatch()
   
     return (
       <div className="flex flex-col items-center p-10">
         <h1 className="text-3xl font-bold mb-4">Count: {count}</h1>
         <div className="space-x-4">
           <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-blue-500 text-white rounded">+</button>
           <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
         </div>
       </div>
     )
   }
   
   export default App
   ```

9. install react router-dom
 ```bash
   npm i -D react-router-dom
   ```

10. Run the App
```bash
   npm run dev
   ```

         




