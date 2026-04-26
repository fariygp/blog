function renderPosts(category = 'all') {
    const container = document.getElementById('posts-container');
    let filteredPosts = posts;
    
    if (category !== 'all') {
        filteredPosts = posts.filter(post => post.category === category);
    }
    
    container.innerHTML = filteredPosts.map(post => `
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

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPosts(btn.dataset.category);
    });
});

renderPosts();
