// Mobile menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Render featured posts
function renderFeaturedPosts() {
    const container = document.getElementById('featured-posts');
    if (!container) return;
    
    const featured = posts.slice(0, 3);
    container.innerHTML = featured.map(post => `
        <div class="post-card">
            <img src="${post.image}" alt="${post.title}">
            <span class="post-category">${post.category}</span>
            <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
            <div class="post-meta">${post.date} · ${post.readTime}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="post.html?id=${post.id}" class="btn">Read More</a>
        </div>
    `).join('');
}

// Newsletter subscription
document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thanks for subscribing! ${email} will receive updates.`);
    e.target.reset();
});

// Single post rendering with comments
function loadSinglePost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = posts.find(p => p.id === postId);
    
    if (!post) return;
    
    const container = document.getElementById('single-post');
    container.innerHTML = `
        <h1>${post.title}</h1>
        <div class="post-meta">${post.date} · ${post.readTime} · Category: ${post.category}</div>
        <img src="${post.image}" alt="${post.title}" style="width:100%; border-radius:15px; margin:1.5rem 0;">
        <div class="post-content">${post.content}</div>
    `;
    
    // Load comments
    const postComments = getPostComments(postId);
    document.getElementById('comment-count').textContent = postComments.length;
    
    const commentsList = document.getElementById('comments-list');
    if (commentsList) {
        commentsList.innerHTML = postComments.map(c => `
            <div class="comment">
                <strong>${c.name}</strong> <small>${c.date}</small>
                <p>${c.text}</p>
            </div>
        `).join('');
    }
    
    // Handle comment submission
    document.getElementById('comment-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('comment-name').value;
        const text = document.getElementById('comment-text').value;
        addComment(postId, name, text);
        loadSinglePost(); // Refresh
        e.target.reset();
    });
}

// Initialize
renderFeaturedPosts();
if (window.location.pathname.includes('post.html')) loadSinglePost();
