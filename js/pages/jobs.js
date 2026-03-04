const JOBS_DATA = [
    { title: "Senior Frontend Engineer", company: "TechNova", location: "Remote", type: "Full-Time", salary: "$120K - $150K", tags: ["React", "JavaScript"] },
    { title: "Backend Developer", company: "DataFlow", location: "New York, NY", type: "Hybrid", salary: "$110K - $140K", tags: ["Node.js", "PostgreSQL"] },
    { title: "Product Designer", company: "CreativeWorks", location: "San Francisco, CA", type: "On-site", salary: "$100K - $130K", tags: ["Figma", "UI/UX"] },
    { title: "Full Stack Developer", company: "StartupInc", location: "Remote", type: "Full-Time", salary: "$105K - $135K", tags: ["Vue.js", "Python"] },
    { title: "Android Engineer", company: "MobileFirst", location: "Remote", type: "Contract", salary: "$90K - $120K", tags: ["Kotlin", "Android Studio"] },
];

export const renderJobs = () => {
    const jobCards = JOBS_DATA.map(job => `
        <div class="glass-card job-card" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <h3 style="margin-bottom: 0.25rem;">${job.title}</h3>
                    <div style="color: var(--clr-primary); font-weight: 500;">${job.company}</div>
                </div>
                <span class="badge primary">${job.type}</span>
            </div>
            
            <div style="display: flex; gap: 1rem; color: var(--clr-text-muted); font-size: 0.9rem;">
                <span>📍 ${job.location}</span>
                <span>💰 ${job.salary}</span>
            </div>
            
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto; padding-top: 1rem;">
                ${job.tags.map(tag => `<span class="badge" style="background: rgba(255,255,255,0.05);">${tag}</span>`).join('')}
            </div>
            
            <button class="btn btn-primary shadow-glow apply-btn" style="margin-top: 1rem; width: 100%;">Apply Now</button>
        </div>
    `).join('');

    return `
        <div class="container animate-in">
            <header class="section-header">
                <h1 class="section-title">Explore <span class="text-gradient">Opportunities</span></h1>
                <p class="section-subtitle">Find your dream role. Filter through thousands of top-tier jobs.</p>
            </header>

            <div style="display: flex; gap: 2rem; align-items: flex-start;">
                <!-- Filters Sidebar -->
                <aside class="glass-card" style="flex: 0 0 280px; position: sticky; top: 100px;">
                    <h3 style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.5rem;">Filters</h3>
                    
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Search Role</label>
                        <input type="text" placeholder="e.g. Software Engineer" style="width: 100%; padding: 0.75rem; border-radius: var(--radius-md); background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); color: white;" />
                    </div>

                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Job Type</label>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <label><input type="checkbox" checked/> Full-Time</label>
                            <label><input type="checkbox" /> Part-Time</label>
                            <label><input type="checkbox" /> Contract</label>
                            <label><input type="checkbox" /> Internship</label>
                        </div>
                    </div>
                </aside>

                <!-- Job Listings -->
                <div style="flex: 1;" class="grid-2">
                    ${jobCards}
                </div>
            </div>

            <!-- Application Modal -->
            <div id="apply-modal" class="modal-overlay">
                <div class="glass-card modal-content" style="padding: 2.5rem;">
                    <button id="close-modal" class="modal-close">&times;</button>
                    <h2 id="modal-job-title" style="margin-bottom: 0.25rem; font-size: 1.5rem;">Apply for Role</h2>
                    <p id="modal-company-name" style="color: var(--clr-text-muted); margin-bottom: 2rem;">Company Name</p>
                    
                    <form id="apply-form">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Armaan" required />
                        </div>
                        <div class="form-group">
                            <label>Mobile Number</label>
                            <input type="tel" placeholder="70XXXXXXX" required />
                        </div>
                        <div class="form-group">
                            <label>Education Qualification</label>
                            <input type="text" placeholder="e.g. B.Tech in Computer Science" required />
                        </div>
                        <div class="form-group">
                            <label>Experience</label>
                            <textarea rows="3" placeholder="Briefly describe your past experience, internships, or projects..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary shadow-glow" style="width: 100%; margin-top: 1rem;">Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    `;
};

// Handle Apply interactions after route renders
document.addEventListener('route-rendered', () => {
    let path = window.location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    if (path === '/jobs') {
        const modal = document.getElementById('apply-modal');
        const closeModalBtn = document.getElementById('close-modal');
        const applyForm = document.getElementById('apply-form');
        let currentApplyBtn = null;
        let currentJobTitle = '';
        let currentCompanyName = '';

        const closeModal = () => {
            modal.classList.remove('active');
            applyForm.reset();
        };

        const applyBtns = document.querySelectorAll('.apply-btn');
        applyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const jobCard = e.target.closest('.job-card');
                const jobTitle = jobCard.querySelector('h3').innerText;
                const companyName = jobCard.querySelector('div[style*="var(--clr-primary)"]').innerText;

                // Populate Modal Data
                document.getElementById('modal-job-title').innerText = `Apply for ${jobTitle}`;
                document.getElementById('modal-company-name').innerText = `at ${companyName}`;

                // Show Modal
                modal.classList.add('active');
                currentApplyBtn = e.target; // Keep track of which button was clicked
                currentJobTitle = jobTitle;
                currentCompanyName = companyName;
            });
        });

        // Close Modal Events
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Form Submit Event
        applyForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Gather form data
            const formData = {
                job_title: currentJobTitle,
                company_name: currentCompanyName,
                full_name: applyForm.querySelector('input[type="text"]').value,
                mobile_number: applyForm.querySelector('input[type="tel"]').value,
                education: applyForm.querySelectorAll('input[type="text"]')[1].value,
                experience: applyForm.querySelector('textarea').value
            };

            try {
                // Change button state
                const applySubmitBtn = applyForm.querySelector('button[type="submit"]');
                const origText = applySubmitBtn.innerText;
                applySubmitBtn.innerText = "Submitting...";
                applySubmitBtn.disabled = true;

                // Send to Google Sheets Apps Script API
                const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxv-nwsr_L0UWo-gBuvwCdRqBMThCJPp3SvPpu6dd8RkUKqGU6R7AAqm37KudmDOOOmOA/exec';

                // Apps Script often requires URLSearchParams (form-urlencoded) instead of JSON for easy CORS bypass
                const searchParams = new URLSearchParams();
                for (const key in formData) {
                    searchParams.append(key, formData[key]);
                }

                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Bypasses CORS policy and redirect blockage
                    body: searchParams
                });

                // With no-cors, we can't read the response, so we assume success if no network error was thrown
                alert('🎉 Application sent successfully to Google Sheets!');

                // Visual feedback on the original card button
                if (currentApplyBtn) {
                    currentApplyBtn.innerText = "Applied";
                    currentApplyBtn.style.background = "var(--clr-success)";
                    currentApplyBtn.disabled = true;
                }
                closeModal();
            } catch (error) {
                alert('Network error connecting to Google Sheets.');
                console.error(error);
            } finally {
                const applySubmitBtn = applyForm.querySelector('button[type="submit"]');
                applySubmitBtn.innerText = "Submit Application";
                applySubmitBtn.disabled = false;
            }
        });
    }
});

