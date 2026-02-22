// Task 9: API with Async/Await
// • Use API: https://jsonplaceholder.typicode.com/users/1
// • Fetch user data.
// • Print response status, name, email, and company name.
// • Handle errors using try-catch.
// • Print 'Process completed'.


async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    console.log("Response Status:", response.status);

    const data = await response.json();

    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Company:", data.company.name);

  } catch (error) {
    console.log("Error:", error);
  }

  console.log("Process completed");
}

getUserData();

// output:
// Response Status: 200
// Name: Leanne Graham
// Email: Sincere@april.biz
// Company: Romaguera-Crona
// Process completed