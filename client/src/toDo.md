- CSS for resource cards Wendy?
- CSS for form ✅
  - Made it responsive for smaller screens ✅
  - Made all inputs consistent sizing and gaps between each ✅
- CSS for checkboxes ✅
- Make nav bar responsive (switch to hidden nav with hamburger icon for mobile)
- ...see more show and hide description for resource cards
- home screen / global css ✅
- Fix form architecture ✅
- State variables for all form inputs and convert to json on submit ✅
- Impose character limit on description ✅
- Impose grade levels limit on grade levels ✅
- Add form validation and error handling (partly done see sub-sections below)
  - error handling for empty fields ✅
  - Check if inputs are correct type with REGEX (use ChatGPT or REGEX generator to help) Saniya?
    - If input is incorrect type (like if they type in 24 for their email) give a helpful error message Saniya?
- Convert grades array to a string range so ["3rd", "2nd", "4th"] can be displayed as "2nd-4th" Saniya?
- For Requests since there will only be 1 grade (A string not an array) we need to change our logic in the case that isARequest=true OR convert the array to a single string before passing it to the the backend in that case.
- Use endpoint to send json to backend on submission of form
- Use endpoint to pull resource json from backend

Minor CSS stuff

- Make cursor over nav links and all links/buttons be pointer both on hover and on focus
- Make borders for all inputs on form consistently sized

Maybe Later????

- create search functionality ?
