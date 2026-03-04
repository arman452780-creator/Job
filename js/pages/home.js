export const renderHome = () => {
    return `
        <div class="container animate-in">
            <!-- Hero Section -->
            <section class="hero-section" style="padding: 6rem 0; text-align: center;">
                <h1 style="font-size: 4rem; margin-bottom: 1rem;">
                    Launch your career to the <span class="text-gradient">NextLevel</span>
                </h1>
                <p class="section-subtitle" style="margin-bottom: 2rem;">
                    The ultimate platform combining premium job hunting with top-tier technical preparation. 
                    Master DSA, prepare for Aptitude tests, and understand the hiring process of top tier companies.
                </p>
                <div style="display: flex; justify-content: center; gap: 1rem;">
                    <a href="/jobs" class="btn btn-primary shadow-glow" data-link>Explore Jobs</a>
                    <a href="/prep" class="btn glass hover-lift" style="border: 1px solid rgba(255,255,255,0.2);" data-link>Start Preparing</a>
                </div>
            </section>

            <!-- Features Grid -->
            <section style="padding: 4rem 0;">
                <div class="grid-2">
                    <div class="glass-card">
                        <h3 class="text-gradient">Job Portal</h3>
                        <p style="color: var(--clr-text-muted); margin-bottom: 1.5rem;">Access exclusive job listings tailored to your skills. Filter by roles, experience, and remote options.</p>
                        <a href="/jobs" data-link class="btn glass hover-lift" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Find Jobs &rarr;</a>
                    </div>
                    <div class="glass-card">
                        <h3 class="text-gradient">Preparation Hub</h3>
                        <p style="color: var(--clr-text-muted); margin-bottom: 1.5rem;">Comprehensive notes, practice problems, and mock exams for Aptitude, HR, and Technical rounds.</p>
                        <a href="/prep" data-link class="btn glass hover-lift" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Start Prep &rarr;</a>
                    </div>
                    <div class="glass-card">
                        <h3 class="text-gradient">Dedicated DSA Sheets</h3>
                        <p style="color: var(--clr-text-muted); margin-bottom: 1.5rem;">Master Data Structures and Algorithms with curated, topic-wise sheets and progress tracking.</p>
                        <a href="/dsa" data-link class="btn glass hover-lift" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Solve DSA &rarr;</a>
                    </div>
                    <div class="glass-card">
                        <h3 class="text-gradient">Company Insights</h3>
                        <p style="color: var(--clr-text-muted); margin-bottom: 1.5rem;">Decode the hiring processes of top companies. Exam patterns, syllabi, and eligibility criteria.</p>
                        <a href="/companies" data-link class="btn glass hover-lift" style="font-size: 0.8rem; padding: 0.5rem 1rem;">View Companies &rarr;</a>
                    </div>
                </div>
            </section>
        </div>
    `;
};
