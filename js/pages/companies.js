const COMPANIES = [
    { 
        name: "TechNova", 
        role: "Software Development Engineer", 
        rounds: "4 Rounds", 
        pattern: "1 Online Assessment, 2 Technical Interviews, 1 HR Round" 
    },
    { 
        name: "DataFlow", 
        role: "Backend Engineer", 
        rounds: "5 Rounds", 
        pattern: "Resume Shortlist, 1 OA (System Design), 2 Technical, 1 Hiring Manager" 
    },
    { 
        name: "CreativeWorks", 
        role: "Frontend Engineer", 
        rounds: "3 Rounds", 
        pattern: "1 Take-home Project, 1 Pair Programming, 1 Culture Fit" 
    },
    { 
        name: "StartupInc", 
        role: "Full Stack Developer", 
        rounds: "4 Rounds", 
        pattern: "1 OA (DSA + Aptitude), 2 Technical Interviews, 1 Founder Round" 
    },
    { 
        name: "MobileFirst", 
        role: "Android Engineer", 
        rounds: "4 Rounds", 
        pattern: "1 OA, 1 Machine Coding, 1 System Design, 1 HR Round" 
    }
];

export const renderCompanies = () => {
    const companyCards = COMPANIES.map(company => `
        <div class="glass-card hover-lift">
            <h2 class="text-gradient" style="margin-bottom: 0.5rem; font-size: 1.75rem;">${company.name}</h2>
            <div style="color: var(--clr-text); font-weight: 500; margin-bottom: 1.5rem;">${company.role}</div>
            
            <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.05); margin-bottom: 1.5rem;">
                <div style="font-size: 0.85rem; color: var(--clr-text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Hiring Stages</div>
                <div style="font-weight: 600; color: var(--clr-accent);">${company.rounds}</div>
            </div>

            <div>
                <div style="font-size: 0.85rem; color: var(--clr-text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Exam Pattern</div>
                <p style="font-size: 0.95rem; line-height: 1.5;">${company.pattern}</p>
            </div>

            <button class="btn glass" style="margin-top: 2rem; width: 100%; border: 1px solid rgba(255,255,255,0.1);">View Detailed Syllabus</button>
        </div>
    `).join('');

    return `
        <div class="container animate-in">
            <header class="section-header">
                <h1 class="section-title">Decode the <span class="text-gradient">Hiring Process</span></h1>
                <p class="section-subtitle">Understand the exact interview rounds, exam patterns, and syllabus for top industry leaders.</p>
            </header>

            <div class="grid-2">
                ${companyCards}
            </div>
        </div>
    `;
};
