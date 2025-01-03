# Next.js 15 Server Components: Error Handling in Deeply Nested Data Fetches

This repository demonstrates an uncommon bug in Next.js 15 server components related to error handling in deeply nested data fetches.  When a series of dependent data fetches occurs within a server component, a failure in one of the intermediate fetches might not be properly handled, leading to unexpected behavior.

The `nestedFetchBug.js` file showcases the problematic code. The `nestedFetchSolution.js` demonstrates a solution using async/await and proper error handling to ensure that errors propagate correctly and are handled gracefully.