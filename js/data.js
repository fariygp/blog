const posts = [
    {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Explore the latest trends shaping the web in 2025 and beyond...",
        content: "Full content here... The web is evolving faster than ever. From AI-powered development to WebAssembly, the landscape is changing dramatically...",
        category: "tech",
        date: "March 15, 2025",
        readTime: "5 min read",
        image: "https://via.placeholder.com/600x400?text=Web+Dev"
    },
    {
        id: 2,
        title: "10 Morning Habits for a Productive Day",
        excerpt: "Small changes that can transform your daily routine...",
        content: "Full content here... Waking up early, meditation, planning your day - these simple habits can change everything...",
        category: "productivity",
        date: "March 10, 2025",
        readTime: "4 min read",
        image: "https://via.placeholder.com/600x400?text=Morning+Routine"
    },
    {
        id: 3,
        title: "Digital Minimalism: Less is More",
        excerpt: "How reducing screen time improved my mental health...",
        content: "Full content here... In a world of constant notifications, choosing to disconnect is revolutionary...",
        category: "lifestyle",
        date: "March 5, 2025",
        readTime: "6 min read",
        image: "https://via.placeholder.com/600x400?text=Digital+Minimalism"
    },
    {
        id: 4,
        title: "Understanding React Hooks",
        excerpt: "A beginner's guide to useState, useEffect, and more...",
        content: "Full content here... React Hooks revolutionized how we write components...",
        category: "tech",
        date: "February 28, 2025",
        readTime: "7 min read",
        image: "https://via.placeholder.com/600x400?text=React+Hooks"
    },
    {
        id: 5,
        title: "Building Better Habits with Atomic Changes",
        excerpt: "James Clear's framework applied to daily life...",
        content: "Full content here... Small habits compound into remarkable results...",
        category: "productivity",
        date: "February 20, 2025",
        readTime: "5 min read",
        image: "https://via.placeholder.com/600x400?text=Atomic+Habits"
    },
    {
        id: 6,
        title: "Mindful Living in a Busy World",
        excerpt: "Practices to stay grounded amidst chaos...",
        content: "Full content here... Mindfulness isn't about escaping reality, but embracing it fully...",
        category: "lifestyle",
        date: "February 15, 2025",
        readTime: "4 min read",
        image: "https://via.placeholder.com/600x400?text=Mindful+Living"
    }
];

// Store comments in localStorage
let comments = JSON.parse(localStorage.getItem('blogComments')) || {};

function saveComments() {
    localStorage.setItem('blogComments', JSON.stringify(comments));
}

function getPostComments(postId) {
    return comments[postId] || [];
}

function addComment(postId, name, text) {
    if (!comments[postId]) comments[postId] = [];
    comments[postId].push({
        name: name,
        text: text,
        date: new Date().toLocaleString()
    });
    saveComments();
}
