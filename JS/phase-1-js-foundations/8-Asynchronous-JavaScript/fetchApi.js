console.log("=== 🧩 GET Request ===");

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const data = await res.json(); // Parse JSON
    console.log("✅ Posts fetched:", data.slice(0, 3)); // show first 3
  } catch (err) {
    console.error("❌ Error fetching posts:", err.message);
  }
}

getPosts();


console.log("\n=== 🧩 POST Request ===");

async function createPost() {
  try {
    const newPost = {
      title: "Learn JS",
      body: "Understanding fetch API",
      userId: 1
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    console.log("✅ New Post Created:", data);
  } catch (err) {
    console.error("❌ Error creating post:", err.message);
  }
}

createPost();
