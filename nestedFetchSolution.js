```javascript
import {unstable_getServerSession} from 'next-auth/next';

async function fetchData(id) {
  try {
    // Simulate a data fetch
    const response = await fetch(`https://api.example.com/data/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // Handle the error appropriately, log it, or throw a custom error
    console.error('Error fetching data:', error);
    throw new Error(`Data fetch failed for ID ${id}: ${error.message}`);
  }
}

//Server Component
export default async function MyComponent(){
  try {
    const session = await unstable_getServerSession(context);
    const initialData = await fetchData(1);
    const nestedData = await fetchData(initialData.nextId);
    const finalData = await fetchData(nestedData.finalId);
    return (
      <div>
        <h1>Success</h1>
        <pre>{JSON.stringify(finalData, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }
}
```