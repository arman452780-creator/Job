const DSA_TOPICS = [
    { id: 1, name: "Arrays & Strings", total: 45, solved: 15, color: "--clr-primary" },
    { id: 2, name: "Two Pointers", total: 20, solved: 5, color: "--clr-secondary" },
    { id: 3, name: "Sliding Window", total: 15, solved: 0, color: "--clr-accent" },
    { id: 4, name: "Stack & Queue", total: 30, solved: 10, color: "--clr-success" },
    { id: 5, name: "Linked List", total: 25, solved: 25, color: "--clr-warning" },
    { id: 6, name: "Trees & Graphs", total: 60, solved: 12, color: "--clr-danger" },
    { id: 7, name: "Dynamic Programming", total: 50, solved: 2, color: "--clr-primary" },
];

export const renderDSA = () => {
    const topicCards = DSA_TOPICS.map(topic => {
        const progress = Math.round((topic.solved / topic.total) * 100);
        return `
        <div class="glass-card hover-lift" style="cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                <h3 style="font-size: 1.25rem;">${topic.name}</h3>
                <span style="font-size: 1.5rem; color: var(${topic.color});">
                    ${progress === 100 ? '✅' : '📝'}
                </span>
            </div>
            
            <div style="margin-bottom: 1rem; color: var(--clr-text-muted); font-size: 0.9rem;">
                ${topic.solved} / ${topic.total} Problems Solved
            </div>
            
            <!-- Custom Progress Bar -->
            <div style="width: 100%; background: rgba(255,255,255,0.1); height: 8px; border-radius: var(--radius-full); overflow: hidden;">
                <div style="width: ${progress}%; height: 100%; background: var(${topic.color}); transition: width 1s ease-in-out;"></div>
            </div>
            <div style="text-align: right; font-size: 0.75rem; color: var(--clr-text-muted); margin-top: 0.25rem;">
                ${progress}%
            </div>
        </div>
        `;
    }).join('');

    return `
        <div class="container animate-in">
            <header class="section-header">
                <h1 class="section-title">Crush the <span class="text-gradient">Algorithms</span></h1>
                <p class="section-subtitle">A meticulously curated topic-wise sheet. Track your progress. Master DSA.</p>
            </header>

            <div style="max-width: 800px; margin: 0 auto 3rem auto; background: rgba(21, 27, 43, 0.7); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h2 style="margin-bottom: 0.5rem; font-size: 2rem;">Overall Progress</h2>
                    <p style="color: var(--clr-text-muted);">Keep pushing! Consistency is the key.</p>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 3rem; font-weight: 800; color: var(--clr-success); font-family: var(--font-heading);">69</div>
                    <div style="color: var(--clr-text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">Total Solved</div>
                </div>
            </div>

            <div class="grid-3">
                ${topicCards}
            </div>
        </div>
    `;
};
