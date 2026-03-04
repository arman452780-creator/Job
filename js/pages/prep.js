const MODULES = [
    { title: "Quantitative Aptitude", icon: "📊", desc: "Number system, Time & Work, Probability, and logical reasoning modules.", topics: 24, badge: "Popular" },
    { title: "Verbal Ability", icon: "📝", desc: "Reading comprehension, grammar, vocabulary, and paragraph logic.", topics: 15, badge: "" },
    { title: "Technical Foundation", icon: "💻", desc: "OS fundamentals, DBMS, Computer Networks, and OOPS concepts.", topics: 18, badge: "Essential" },
    { title: "HR Interview Prep", icon: "🤝", desc: "Common behavioral questions, STAR method, and communication tricks.", topics: 8, badge: "" },
    { title: "System Design", icon: "🏗️", desc: "High level & low level design paradigms for scalable architecture.", topics: 12, badge: "Advanced" },
];

export const renderPrep = () => {
    const prepCards = MODULES.map(mod => `
        <div class="glass-card hover-lift" style="cursor: pointer; display: flex; flex-direction: column;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div style="font-size: 2.5rem;">${mod.icon}</div>
                ${mod.badge ? `<span class="badge warning">${mod.badge}</span>` : ''}
            </div>
            <h3 style="margin-bottom: 0.5rem;">${mod.title}</h3>
            <p style="color: var(--clr-text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; flex-grow: 1;">${mod.desc}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem;">
                <span style="font-size: 0.85rem; color: var(--clr-text-muted);">${mod.topics} Topics</span>
                <button class="btn glass" style="font-size: 0.8rem; padding: 0.4rem 0.8rem; border: 1px solid rgba(255,255,255,0.1);">Start</button>
            </div>
        </div>
    `).join('');

    return `
        <div class="container animate-in">
            <header class="section-header">
                <h1 class="section-title">Master the <span class="text-gradient">Fundamentals</span></h1>
                <p class="section-subtitle">Structured notes, practice problems, and mock tests covering Aptitude, Technical topics, and HR Interviews.</p>
            </header>

            <div class="grid-3">
                ${prepCards}
            </div>
        </div>
    `;
};
