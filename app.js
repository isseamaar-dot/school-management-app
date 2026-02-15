const defaultUsers = [
    { username: "isse", role: "Admin", password: "123", name: "Isse Amin", email: "admin@baidoaschool.edu" },
    { username: "teacher", role: "Teacher", password: "123", name: "Mr. Anderson", email: "teacher@baidoaschool.edu", subject: "Mathematics" },
    { username: "student", role: "Student", password: "123", name: "Alice Johnson", email: "alice@baidoaschool.edu", studentId: "SBT-001" },
    { username: "parent", role: "Parent", password: "123", name: "Robert Johnson", email: "parent@baidoaschool.edu", childrenIds: ["SBT-001"] },
    { username: "accountant", role: "Accountant", password: "123", name: "Sarah Smith", email: "accountant@baidoaschool.edu" }
];

function loadData(key, defaultData) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultData;
}

function saveData() {
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
    localStorage.setItem('examsData', JSON.stringify(examsData));
    localStorage.setItem('examResultsData', JSON.stringify(examResultsData));
    localStorage.setItem('teachersData', JSON.stringify(teachersData));
    localStorage.setItem('invoicesData', JSON.stringify(invoicesData));
    localStorage.setItem('availableSubjects', JSON.stringify(availableSubjects));
    localStorage.setItem('attendanceHistory', JSON.stringify(attendanceHistory));
    localStorage.setItem('appUsers', JSON.stringify(appUsers));
}

// Mock Data (used as default if nothing in localStorage)
const defaultStudents = [
    { id: "SBT-001", name: "Alice Johnson", grade: "10A", status: "Active", fees: "Unpaid", phone: "+252 61 555 1111", parent: "Robert Johnson", dateJoined: "2024-01-15" },
    { id: "SBT-002", name: "Mohamed Ali", grade: "9B", status: "Active", fees: "Paid", phone: "+252 61 555 2222", parent: "Ali Muse", dateJoined: "2024-02-10" },
    { id: "BPST-201", name: "Abdullahi Hassan", grade: "10A", status: "Active", fees: "Paid", phone: "+252 61 777 1111", parent: "Hassan Yusuf", dateJoined: "2025-01-05" },
    { id: "BPST-202", name: "Hibo Abdi", grade: "8", status: "Active", fees: "Unpaid", phone: "+252 61 777 2222", parent: "Abdi Gure", dateJoined: "2025-01-10" },
    { id: "BPST-203", name: "Farhiya Mohamed", grade: "7", status: "Active", fees: "Balance", phone: "+252 61 777 3333", parent: "Mohamed Said", dateJoined: "2025-01-12" }
];

const defaultExams = [
    { id: 1, subject: "Mathematics", date: "2026-03-20", grade: "10A", status: "Scheduled" },
    { id: 2, subject: "Physics", date: "2026-03-22", grade: "10A", status: "Scheduled" },
    { id: 3, subject: "Somali Language", date: "2026-03-25", grade: "10A", status: "Scheduled" }
];

const defaultResults = [
    { id: 1, student: "Alice Johnson", grade: "10A", subject: "Mathematics", score: 85, status: "A" },
    { id: 2, student: "Abdullahi Hassan", grade: "10A", subject: "Mathematics", score: 88, status: "A" },
    { id: 3, student: "Abdullahi Hassan", grade: "10A", subject: "Somali Language", score: 95, status: "A+" },
    { id: 4, student: "Abdullahi Hassan", grade: "10A", subject: "History", score: 82, status: "A" },
    { id: 5, student: "Hibo Abdi", grade: "8", subject: "Mathematics", score: 75, status: "B" },
    { id: 6, student: "Hibo Abdi", grade: "8", subject: "Islamic Studies", score: 98, status: "A+" },
    { id: 7, student: "Hibo Abdi", grade: "8", subject: "English", score: 85, status: "A" },
    { id: 8, student: "Farhiya Mohamed", grade: "7", subject: "Somali Language", score: 92, status: "A+" },
    { id: 9, student: "Farhiya Mohamed", grade: "7", subject: "Arabic", score: 88, status: "A" },
    { id: 10, student: "Farhiya Mohamed", grade: "7", subject: "Geography", score: 79, status: "B" }
];

const defaultInvoices = [
    { id: 1, student: "Alice Johnson", studentId: "SBT-001", amount: "$500", date: "2026-02-01", status: "Unpaid" },
    { id: 2, student: "Mohamed Ali", studentId: "SBT-002", amount: "$500", date: "2026-02-01", status: "Paid" },
    { id: 3, student: "Abdullahi Hassan", studentId: "BPST-201", amount: "$450", date: "2026-02-05", status: "Paid" },
    { id: 4, student: "Hibo Abdi", studentId: "BPST-202", amount: "$350", date: "2026-02-05", status: "Unpaid" },
    { id: 5, student: "Farhiya Mohamed", studentId: "BPST-203", amount: "$350", date: "2026-02-05", status: "Balance", balanceAmount: "$150" }
];


const defaultTeachers = [
    { id: 1, name: "Mr. Anderson", subject: "Mathematics", classMaster: "10A", phone: "+1 555-0201" },
    { id: 2, name: "Ms. Roberts", subject: "English", classMaster: "9B", phone: "+1 555-0202" },
    { id: 3, name: "Mr. Clark", subject: "Physics", classMaster: "11C", phone: "+1 555-0203" }
];

// Initialize Data (use let instead of const so data can be modified)
let studentsData = loadData('studentsData', defaultStudents);
let examsData = loadData('examsData', defaultExams);
let examResultsData = loadData('examResultsData', defaultResults);
let teachersData = loadData('teachersData', defaultTeachers);
let invoicesData = loadData('invoicesData', defaultInvoices);
let appUsers = loadData('appUsers', defaultUsers);

// Auto-inject Somali Sample Data if not present
if (!studentsData.find(s => s.id === "BPST-201")) {
    studentsData.push(...defaultStudents.filter(s => s.id.startsWith("BPST-")));
    invoicesData.push(...defaultInvoices.filter(i => i.studentId.startsWith("BPST-")));
    examResultsData.push(...defaultResults.filter(r => ["Abdullahi Hassan", "Hibo Abdi", "Farhiya Mohamed"].includes(r.student)));
    saveData();
}

let attendanceHistory = loadData('attendanceHistory', [
    { date: "2026-02-14", id: "SBT-001", type: "student", status: "Present" },
    { date: "2026-02-14", id: "SBT-002", type: "student", status: "Absent" },
    { date: "2026-02-13", id: "SBT-001", type: "student", status: "Present" },
    { date: "2026-02-13", id: "SBT-002", type: "student", status: "Present" },
    { date: "2026-02-14", id: "1", type: "teacher", status: "Present" }
]);

// Dynamic Stats Calculator
function getStats() {
    // Calculate total students
    const totalStudents = studentsData.length;

    // Calculate present today
    const today = new Date().toISOString().split('T')[0];
    const presentTodayCount = attendanceHistory.filter(a => a.date === today && a.type === 'student' && a.status === 'Present').length;

    // Fallback if no attendance marked today yet
    const displayPresent = presentTodayCount > 0 ? presentTodayCount : totalStudents;
    const attendancePercentage = totalStudents > 0 ? Math.round((presentTodayCount / totalStudents) * 100) : 100;

    // Calculate fees collected from invoices
    const collected = invoicesData
        .filter(inv => inv.status === 'Paid')
        .reduce((sum, inv) => sum + parseInt(inv.amount.replace('$', '').replace(',', '')), 0);

    // Calculate pending fees
    const pendingCount = invoicesData.filter(inv => inv.status === 'Unpaid').length;

    return {
        totalStudents: totalStudents,
        presentToday: displayPresent,
        attendancePercentage: attendancePercentage,
        feesCollected: `$${collected.toLocaleString()}`,
        pendingFees: pendingCount
    };
}

const defaultSubjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "English",
    "History", "Geography", "Technology", "Islamic Studies", "Somali",
    "Arabic", "Business"
];
let availableSubjects = loadData('availableSubjects', defaultSubjects);

// Teachers Data is already initialized at the top


// Router / Navigation Logic
const navLinks = document.querySelectorAll('.nav-item');
const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');

// Templates for Views
const views = {
    dashboard: () => {
        const user = getCurrentUser();
        if (!user) return '';

        switch (user.role) {
            case 'Teacher': return views.teacherDashboard();
            case 'Student': return views.studentDashboard();
            case 'Parent': return views.parentDashboard();
            case 'Accountant': return views.accountantDashboard();
            default: return views.adminDashboard();
        }
    },
    adminDashboard: () => {
        const stats = getStats();
        return `
        <div class="fade-in">
            <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem;">
                <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('dashboard')"><i class="fa-solid fa-download"></i> Download Summary</button>
            </div>
            <div class="dashboard-grid">
                <div class="card stat-card" onclick="navigateTo('students')" style="cursor: pointer; transition: transform 0.2s;">
                    <div class="stat-header">
                        <div class="stat-icon icon-blue"><i class="fa-solid fa-users"></i></div>
                    </div>
                    <div class="stat-value">${stats.totalStudents}</div>
                    <div class="stat-label">Total Students</div>
                </div>
                <div class="card stat-card" onclick="navigateTo('attendance')" style="cursor: pointer; transition: transform 0.2s;">
                    <div class="stat-header">
                        <div class="stat-icon icon-green"><i class="fa-solid fa-user-check"></i></div>
                    </div>
                    <div class="stat-value">${stats.presentToday}</div>
                    <div class="stat-label">Present Today</div>
                </div>
                <div class="card stat-card" onclick="navigateTo('fees')" style="cursor: pointer; transition: transform 0.2s;">
                    <div class="stat-header">
                        <div class="stat-icon icon-yellow"><i class="fa-solid fa-wallet"></i></div>
                    </div>
                    <div class="stat-value">${stats.feesCollected}</div>
                    <div class="stat-label">Fees Collected</div>
                </div>
                <div class="card stat-card" onclick="navigateTo('fees')" style="cursor: pointer; transition: transform 0.2s;">
                    <div class="stat-header">
                        <div class="stat-icon icon-red"><i class="fa-solid fa-circle-exclamation"></i></div>
                    </div>
                    <div class="stat-value">${stats.pendingFees}</div>
                    <div class="stat-label">Pending Payments</div>
                </div>
            </div>

            <!-- Analytics Charts -->
            <div class="dashboard-grid" style="margin-top: 2rem; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));">
                <div class="card">
                    <h3><i class="fa-solid fa-chart-pie" style="color: var(--primary);"></i> Fees Overview</h3>
                    <div style="position: relative; height: 250px; width: 100%;">
                        <canvas id="dashFeesChart"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h3><i class="fa-solid fa-chart-simple" style="color: var(--success);"></i> Students per Grade</h3>
                    <div style="position: relative; height: 250px; width: 100%;">
                        <canvas id="dashStudentsChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;
    },
    teacherDashboard: () => {
        const stats = getStats();
        return `
        <div class="fade-in">
            <div class="card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white;">
                <h2>Welcome, ${getCurrentUser().name}! 👨‍🏫</h2>
                <p>Manage your classes and students efficiently.</p>
            </div>
            <div class="dashboard-grid">
                <div class="card stat-card" onclick="navigateTo('attendance')">
                    <div class="stat-header"><div class="stat-icon icon-green"><i class="fa-solid fa-user-check"></i></div></div>
                    <div class="stat-value">${stats.presentToday}</div>
                    <div class="stat-label">Attendance Today</div>
                </div>
                <div class="card stat-card" onclick="navigateTo('exams')">
                    <div class="stat-header"><div class="stat-icon icon-blue"><i class="fa-solid fa-file-pen"></i></div></div>
                    <div class="stat-value">${examsData.length}</div>
                    <div class="stat-label">Active Exams</div>
                </div>
            </div>
            <div class="card">
                <h3>Quick Actions</h3>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button class="btn btn-primary" onclick="navigateTo('attendance')"><i class="fa-solid fa-calendar-check"></i> Mark Attendance</button>
                    <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="navigateTo('exams')"><i class="fa-solid fa-plus"></i> Enter Exam Results</button>
                </div>
            </div>
        </div>`;
    },
    studentDashboard: () => {
        const user = getCurrentUser();

        // Add App Layout Class
        document.body.classList.add('app-dark-layout');
        document.querySelector('.app-container').classList.add('app-dark-layout');
        document.querySelector('.main-content').classList.add('no-header');
        document.querySelector('.content-area').classList.add('app-style');

        return `
        <div class="fade-in" style="padding-top: 2rem;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: white; margin-bottom: 0.5rem;">Baidoa Academy</h2>
                <p style="color: #94a3b8; font-size: 0.9rem;">Student Portal</p>
            </div>

            <div class="app-grid">
                <div class="app-grid-item" onclick="navigateTo('exams')">
                    <div class="app-icon-box"><i class="fa-solid fa-file-invoice"></i></div>
                    <span class="app-grid-label">Results</span>
                </div>
                <div class="app-grid-item" onclick="navigateTo('fees')">
                    <div class="app-icon-box"><i class="fa-solid fa-money-bill-transfer"></i></div>
                    <span class="app-grid-label">Fee Details</span>
                </div>
                <div class="app-grid-item" onclick="navigateTo('attendance')">
                    <div class="app-icon-box"><i class="fa-solid fa-user-check"></i></div>
                    <span class="app-grid-label">Attendance</span>
                </div>
                
                <div class="app-grid-item" onclick="showStudentProfile('${user.studentId}')">
                    <div class="app-icon-box"><i class="fa-solid fa-graduation-cap"></i></div>
                    <span class="app-grid-label">My Profile</span>
                </div>
                <div class="app-grid-item" onclick="alert('Academic Calendar 2026:\\nTerm 1: Jan 5 - April 10\\nTerm 2: May 4 - Aug 14\\nTerm 3: Sept 7 - Dec 4')">
                    <div class="app-icon-box"><i class="fa-solid fa-calendar-alt"></i></div>
                    <span class="app-grid-label">Calendar</span>
                </div>
                <div class="app-grid-item">
                    <div class="app-icon-box"><i class="fa-solid fa-chart-line"></i></div>
                    <span class="app-grid-label">Activity</span>
                </div>

                <div class="app-grid-item" onclick="navigateTo('exams')">
                    <div class="app-icon-box"><i class="fa-solid fa-calendar-check"></i></div>
                    <span class="app-grid-label">Exam Schedule</span>
                </div>
                <div class="app-grid-item" onclick="navigateTo('notifications')">
                    <div class="app-icon-box"><i class="fa-solid fa-bell"></i></div>
                    <span class="app-grid-label">Notice Board</span>
                </div>
                <div class="app-grid-item">
                    <div class="app-icon-box"><i class="fa-solid fa-book-open"></i></div>
                    <span class="app-grid-label">Lessons</span>
                </div>
            </div>

            <!-- Bottom Navigation -->
            <div class="bottom-nav">
                <button class="bottom-nav-item active" onclick="navigateTo('dashboard')">
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                </button>
                <button class="bottom-nav-item" onclick="navigateTo('settings')">
                    <i class="fa-solid fa-user"></i>
                    <span>Profile</span>
                </button>
                <button class="bottom-nav-item" onclick="navigateTo('settings')">
                    <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </button>
            </div>
        </div>`;
    },
    parentDashboard: () => {
        const user = getCurrentUser();

        // Add App Layout Class
        document.body.classList.add('app-dark-layout');
        document.querySelector('.app-container').classList.add('app-dark-layout');
        document.querySelector('.main-content').classList.add('no-header');
        document.querySelector('.content-area').classList.add('app-style');

        return `
        <div class="fade-in" style="padding-top: 2rem;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: white; margin-bottom: 0.5rem;">Parent Portal</h2>
                <p style="color: #94a3b8; font-size: 0.9rem;">Monitoring Child Progress</p>
            </div>

            <div class="app-grid">
                <div class="app-grid-item" onclick="navigateTo('students')">
                    <div class="app-icon-box" style="background: #4F46E5;"><i class="fa-solid fa-children"></i></div>
                    <span class="app-grid-label">My Children</span>
                </div>
                <div class="app-grid-item" onclick="navigateTo('fees')">
                    <div class="app-icon-box" style="background: #0B3B5C;"><i class="fa-solid fa-receipt"></i></div>
                    <span class="app-grid-label">Fees & Dues</span>
                </div>
                <div class="app-grid-item" onclick="navigateTo('exams')">
                    <div class="app-icon-box" style="background: #0B3B5C;"><i class="fa-solid fa-award"></i></div>
                    <span class="app-grid-label">Exam Results</span>
                </div>
                
                <div class="app-grid-item" onclick="navigateTo('notifications')">
                    <div class="app-icon-box" style="background: #0B3B5C;"><i class="fa-solid fa-bullhorn"></i></div>
                    <span class="app-grid-label">Notices</span>
                </div>
                <div class="app-grid-item" onclick="navigateTo('attendance')">
                    <div class="app-icon-box" style="background: #0B3B5C;"><i class="fa-solid fa-calendar-check"></i></div>
                    <span class="app-grid-label">Attendance</span>
                </div>
                <div class="app-grid-item">
                    <div class="app-icon-box" style="background: #0B3B5C;"><i class="fa-solid fa-message"></i></div>
                    <span class="app-grid-label">Messages</span>
                </div>
            </div>

            <!-- Bottom Navigation -->
            <div class="bottom-nav">
                <button class="bottom-nav-item active" onclick="navigateTo('dashboard')">
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                </button>
                <button class="bottom-nav-item" onclick="navigateTo('settings')">
                    <i class="fa-solid fa-user"></i>
                    <span>Profile</span>
                </button>
                <button class="bottom-nav-item" onclick="navigateTo('settings')">
                    <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </button>
            </div>
        </div>`;
    },
    accountantDashboard: () => {
        const stats = getStats();
        return `
        <div class="fade-in">
             <div class="card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #d97706 0%, #fbbf24 100%); color: white;">
                <h2>Financial Overview 💰</h2>
                <p>Baidoa School Revenue Management</p>
            </div>
            <div class="dashboard-grid">
                 <div class="card stat-card" onclick="navigateTo('fees')">
                    <div class="stat-header"><div class="stat-icon icon-yellow"><i class="fa-solid fa-wallet"></i></div></div>
                    <div class="stat-value">${stats.feesCollected}</div>
                    <div class="stat-label">Total Collected</div>
                </div>
                 <div class="card stat-card" onclick="navigateTo('fees')">
                    <div class="stat-header"><div class="stat-icon icon-red"><i class="fa-solid fa-circle-exclamation"></i></div></div>
                    <div class="stat-value">${stats.pendingFees}</div>
                    <div class="stat-label">Pending Invoices</div>
                </div>
            </div>
            <div class="card">
                <h3>Financial Actions</h3>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button class="btn btn-primary" onclick="showAddFeeForm()"><i class="fa-solid fa-plus"></i> Create New Invoice</button>
                    <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('fees')"><i class="fa-solid fa-download"></i> Export Financial Report</button>
                </div>
            </div>
        </div>`;
    },
    students: () => `
        <div class="fade-in">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                <div class="search-box" style="flex: 1; max-width: 300px; position: relative;">
                    <i class="fa-solid fa-magnifying-glass" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                    <input type="text" id="studentSearch" placeholder="Search by Name, ID, or Class..." class="form-control" style="padding-left: 2.5rem;" onkeyup="filterStudents()">
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('students')"><i class="fa-solid fa-download"></i> Download CSV</button>
                    <button class="btn btn-outline" style="color: var(--warning); border-color: var(--border);" onclick="deleteSelectedStudents()"><i class="fa-solid fa-trash"></i> Delete Selected</button>
                    <button class="btn btn-primary" onclick="navigateTo('registration')"><i class="fa-solid fa-plus"></i> Add Student</button>
                </div>
            </div>
            <div class="card table-container">
                <table>
                    <thead>
                        <tr>
                            <th style="width: 40px;"><input type="checkbox" onchange="toggleSelectAll(this)"></th>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Phone</th>
                            <th>Parent</th>
                            <th>Date Joined</th>
                            <th>Status</th>
                            <th>Fees</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="student-table-body">
                        ${renderStudentRows(studentsData)}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    registration: () => getStudentFormHTML(null),
    teachers: () => `
        <div class="fade-in">
             <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem; gap: 0.5rem;">
                <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('teachers')"><i class="fa-solid fa-download"></i> Download CSV</button>
                <button class="btn btn-primary" onclick="showAddTeacherForm()"><i class="fa-solid fa-plus"></i> Add Teacher</button>
            </div>
            <div class="card table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Class Master</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${teachersData.map(t => `
                            <tr>
                                <td><strong>${t.name}</strong></td>
                                <td>${t.subject}</td>
                                <td>${t.classMaster}</td>
                                <td>${t.phone}</td>
                                <td>
                                    <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem;" onclick="editTeacher(${t.id})"><i class="fa-solid fa-pen"></i></button>
                                    <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; color: var(--primary);" onclick="generateIDCard('teacher', ${t.id})"><i class="fa-solid fa-id-card"></i></button>
                                    <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; color: var(--warning);" onclick="deleteTeacher(${t.id})"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    exams: () => {
        const user = getCurrentUser();
        const isStudent = user.role === 'Student';
        const student = isStudent ? studentsData.find(s => s.id === user.studentId) : null;

        let filteredSchedule = examsData;
        let filteredResults = examResultsData;

        if (isStudent && student) {
            filteredSchedule = examsData.filter(e => e.grade === student.grade);
            filteredResults = examResultsData.filter(r => r.student === student.name);
        }

        return `
        <div class="fade-in">
             <div style="display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #e5e7eb;">
                <button class="btn" id="tab-schedule" onclick="switchExamTab('schedule')" style="border-radius: 0; border-bottom: 2px solid var(--primary); color: var(--primary); font-weight: 600;">Exam Schedule</button>
                <button class="btn" id="tab-results" onclick="switchExamTab('results')" style="border-radius: 0; color: var(--text-muted);">Exam Results</button>
            </div>

            <!-- Schedule View -->
            <div id="view-schedule">
                <div style="display: ${isStudent ? 'none' : 'flex'}; justify-content: flex-end; margin-bottom: 1rem; gap: 0.5rem;">
                    <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('exams_schedule')"><i class="fa-solid fa-download"></i> Download CSV</button>
                    <button class="btn btn-primary" onclick="showAddExamForm()"><i class="fa-solid fa-plus"></i> Schedule Exam</button>
                </div>
                <div class="card table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Class</th>
                                <th>Status</th>
                                ${isStudent ? '' : '<th>Action</th>'}
                            </tr>
                        </thead>
                        <tbody>
                            ${filteredSchedule.map(exam => `
                                <tr>
                                    <td><strong>${exam.subject}</strong></td>
                                    <td>${exam.date}</td>
                                    <td>${exam.grade}</td>
                                    <td>
                                        <span class="status-badge" style="background-color: ${exam.status === 'Scheduled' ? '#EFF6FF' : '#DCFCE7'}; color: ${exam.status === 'Scheduled' ? 'var(--primary)' : 'var(--success)'};">
                                            ${exam.status}
                                        </span>
                                    </td>
                                    ${isStudent ? '' : `<td><button class="btn btn-outline" style="padding: 0.2rem 0.5rem; color: var(--warning);" onclick="deleteExam(${exam.id})"><i class="fa-solid fa-trash"></i></button></td>`}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Results View -->
            <div id="view-results" style="display: none;">
                 <div style="display: ${isStudent ? 'none' : 'flex'}; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <select class="form-control" style="max-width: 200px;" onchange="filterResultsByClass(this.value)">
                        <option value="All">All Classes</option>
                        ${[...new Set(studentsData.map(s => s.grade))].sort().map(g => `<option value="${g}">${g}</option>`).join('')}
                    </select>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('exams_results')"><i class="fa-solid fa-download"></i> Download CSV</button>
                        <button class="btn btn-primary" onclick="showAddResultForm()"><i class="fa-solid fa-plus"></i> Enter Result</button>
                    </div>
                </div>
                <div class="card table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Score</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody id="exam-results-body">
                            ${renderExamResults(filteredResults)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    },

    attendance: () => {
        const user = getCurrentUser();
        const isStudent = user.role === 'Student';
        const today = new Date().toISOString().split('T')[0];

        if (isStudent) {
            const myAttendance = attendanceHistory.filter(h => h.id === user.studentId && h.type === 'student');
            const totalDays = myAttendance.length;
            const presentDays = myAttendance.filter(h => h.status === 'Present' || h.status === 'Late').length;
            const percent = totalDays > 0 ? ((presentDays / totalDays) * 100).toFixed(1) : 0;

            return `
            <div class="fade-in">
                <div class="card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white;">
                    <h3>My Attendance Overview</h3>
                    <div style="font-size: 2.5rem; font-weight: 700; margin: 1rem 0;">${percent}%</div>
                    <p>Total Records: ${totalDays} | Present: ${presentDays}</p>
                </div>

                <div class="card table-container">
                    <h3>Attendance History</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${myAttendance.sort((a, b) => new Date(b.date) - new Date(a.date)).map(h => `
                                <tr>
                                    <td>${h.date}</td>
                                    <td>
                                        <span class="status-badge" style="background: ${h.status === 'Present' ? '#dcfce7' : h.status === 'Late' ? '#fef9c3' : '#fee2e2'}; color: ${h.status === 'Present' ? '#166534' : h.status === 'Late' ? '#854d0e' : '#991b1b'};">
                                            ${h.status}
                                        </span>
                                    </td>
                                </tr>
                            `).join('')}
                            ${totalDays === 0 ? '<tr><td colspan="2" style="text-align:center;">No records found</td></tr>' : ''}
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        const studentPercent = getAttendancePercentage(today, 'student');
        return `
        <div class="fade-in">
             <div style="display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #e5e7eb;">
                <button class="btn" id="att-tab-students" onclick="switchAttendanceTab('students')" style="border-radius: 0; border-bottom: 2px solid var(--primary); color: var(--primary); font-weight: 600;">Student Attendance</button>
                <button class="btn" id="att-tab-teachers" onclick="switchAttendanceTab('teachers')" style="border-radius: 0; color: var(--text-muted);">Teacher Attendance</button>
                <button class="btn" id="att-tab-reports" onclick="switchAttendanceTab('reports')" style="border-radius: 0; color: var(--text-muted);">Monthly Reports</button>
            </div>

            <!-- Student Attendance View -->
            <div id="view-att-students">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <h3 style="color: var(--primary);">Mark Student Attendance</h3>
                        <p style="font-size: 0.85rem; color: var(--text-muted);">Daily Compliance: <strong style="color: var(--success);">${studentPercent}%</strong></p>
                    </div>
                    <div style="display: flex; gap: 0.5rem; align-items: center;">
                        <button class="btn btn-outline" style="background: #f8fafc; border-color: var(--primary); color: var(--primary);" onclick="simulateQRScan()"><i class="fa-solid fa-qrcode"></i> Scan QR</button>
                        <input type="date" id="attStudentDate" class="form-control" value="${today}" style="max-width: 150px;">
                        <select class="form-control" id="attendanceGradeSelect" onchange="loadAttendanceForGrade(this.value)" style="max-width: 150px;">
                            <option value="All">All Classes</option>
                            ${[...new Set(studentsData.map(s => s.grade))].sort().map(g => `<option value="${g}">${g}</option>`).join('')}
                        </select>
                    </div>
                </div>
                
                <div class="card table-container">
                    <form onsubmit="handleAttendanceSubmit(event, 'student')">
                        <table>
                            <thead><tr><th>ID</th><th>Name</th><th>Status</th></tr></thead>
                            <tbody id="attendance-table-body">
                                <tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 2rem;">Please select a class to mark attendance.</td></tr>
                            </tbody>
                        </table>
                        <div style="padding: 1rem; display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border);">
                             <button type="button" class="btn btn-outline" onclick="markAllAbsent()">Mark All Absent</button>
                            <button type="button" class="btn btn-outline" onclick="markAllPresent()">Mark All Present</button>
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Teacher Attendance View -->
            <div id="view-att-teachers" style="display: none;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <div>
                        <h3 style="color: var(--primary);">Mark Teacher Attendance</h3>
                        <p style="font-size: 0.85rem; color: var(--text-muted);">Staff Presence: <strong id="teacherAttPercent">...</strong></p>
                    </div>
                    <input type="date" id="attTeacherDate" class="form-control" value="${today}" style="max-width: 150px;" onchange="loadTeacherAttendance()">
                </div>
                <div class="card table-container">
                    <form onsubmit="handleAttendanceSubmit(event, 'teacher')">
                        <table>
                            <thead><tr><th>ID</th><th>Teacher Name</th><th>Status</th></tr></thead>
                            <tbody id="teacher-attendance-body"></tbody>
                        </table>
                        <div style="padding: 1rem; display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border);">
                            <button type="submit" class="btn btn-primary">Save Teacher Attendance</button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Reports View -->
            <div id="view-att-reports" style="display: none;">
                <div class="card" style="margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                         <h3>Attendance Analytics</h3>
                         <div style="display: flex; gap: 0.5rem;">
                            <input type="month" id="reportMonth" class="form-control" value="${today.substring(0, 7)}" onchange="loadMonthlyAttendanceReport(this.value)">
                            <button class="btn btn-primary" onclick="exportAttendanceCSV()"><i class="fa-solid fa-file-export"></i> Export Report</button>
                         </div>
                    </div>
                </div>
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                    <div class="card">
                        <h4>Monthly Summary</h4>
                        <div id="monthlyStatsArea" style="margin-top: 1rem;"></div>
                    </div>
                    <div class="card">
                        <h4>Top Present Students</h4>
                        <div id="topStudentsArea" style="margin-top: 1rem;"></div>
                    </div>
                </div>
                <div class="card" style="margin-top: 1.5rem;">
                    <h4>Detailed Log</h4>
                    <div class="table-container" style="margin-top: 1rem;">
                        <table id="detailedReportTable">
                            <thead><tr><th>Date</th><th>Student</th><th>Class</th><th>Status</th></tr></thead>
                            <tbody id="reportLogBody"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`;
    },
    fees: () => {
        const user = getCurrentUser();
        const isStudent = user.role === 'Student';

        let filteredInvoices = invoicesData;
        if (isStudent) {
            filteredInvoices = invoicesData.filter(inv => inv.studentId === user.studentId);
        }

        const totalExpected = filteredInvoices.reduce((sum, inv) => sum + parseInt(inv.amount.replace('$', '').replace(',', '')), 0);
        const totalCollected = filteredInvoices
            .filter(inv => inv.status === 'Paid')
            .reduce((sum, inv) => sum + parseInt(inv.amount.replace('$', '').replace(',', '')), 0);

        return `
        <div class="fade-in">
             <div class="dashboard-grid">
                <div class="card stat-card">
                   <div class="stat-label">${isStudent ? 'Total Billed' : 'Total Expected'}</div>
                   <div class="stat-value">$${totalExpected.toLocaleString()}</div>
                </div>
                 <div class="card stat-card">
                   <div class="stat-label">${isStudent ? 'Total Paid' : 'Collected'}</div>
                   <div class="stat-value" style="color: var(--success);">$${totalCollected.toLocaleString()}</div>
                </div>
                ${isStudent ? `
                 <div class="card stat-card">
                   <div class="stat-label">Outstanding Balance</div>
                   <div class="stat-value" style="color: var(--warning);">$${(totalExpected - totalCollected).toLocaleString()}</div>
                </div>
                ` : ''}
             </div>
             
             <div class="card table-container">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                    <h3>${isStudent ? 'My Invoices' : 'Invoices'}</h3>
                    <div class="search-box" style="display: ${isStudent ? 'none' : 'flex'}; flex: 1; max-width: 300px; position: relative;">
                        <i class="fa-solid fa-magnifying-glass" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                        <input type="text" id="feeSearch" placeholder="Search by Student, ID, or Parent..." class="form-control" style="padding-left: 2.5rem;" onkeyup="filterFees()">
                    </div>
                    <div style="display: ${isStudent ? 'none' : 'flex'}; gap: 0.5rem;">
                        <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('fees')"><i class="fa-solid fa-download"></i> Download CSV</button>
                        <button class="btn btn-primary" onclick="showAddFeeForm()"><i class="fa-solid fa-plus"></i> Add Invoice</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Total Amount</th>
                            <th>Balance Due</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            ${isStudent ? '' : '<th>Action</th>'}
                        </tr>
                    </thead>
                    <tbody id="fee-table-body">
                        ${renderInvoiceRows(filteredInvoices)}
                    </tbody>
                </table>
             </div>
        </div>
    `;
    },
    reports: () => `
        <div class="fade-in">
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="color: var(--primary); margin-bottom: 1rem;"><i class="fa-solid fa-file-export"></i> Export Data</h3>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="exportToCSV('students')"><i class="fa-solid fa-download"></i> Students CSV</button>
                    <button class="btn btn-primary" onclick="exportToCSV('teachers')"><i class="fa-solid fa-download"></i> Teachers CSV</button>
                    <button class="btn btn-primary" onclick="exportToCSV('fees')"><i class="fa-solid fa-download"></i> Fees CSV</button>
                    <button class="btn btn-primary" onclick="exportToCSV('exams_schedule')"><i class="fa-solid fa-download"></i> Exam Schedule CSV</button>
                    <button class="btn btn-primary" onclick="exportToCSV('exams_results')"><i class="fa-solid fa-download"></i> Exam Results CSV</button>
                    <button class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);" onclick="exportToCSV('dashboard')"><i class="fa-solid fa-download"></i> System Summary CSV</button>
                </div>
            </div>

            <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));">
                <div class="card">
                    <h3>Attendance Trends</h3>
                    <div style="position: relative; height: 300px; width: 100%;">
                        <canvas id="attendanceChart"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h3>Fee Collection</h3>
                    <div style="position: relative; height: 300px; width: 100%;">
                        <canvas id="feesChart"></canvas>
                    </div>
                </div>
                <div class="card" style="grid-column: 1 / -1;">
                    <h3>Student Performance (Average Grades)</h3>
                    <div style="position: relative; height: 300px; width: 100%;">
                        <canvas id="gradesChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `,
    settings: () => `
        <div class="fade-in">
            <div class="dashboard-grid" style="grid-template-columns: 1fr;">
                <!-- School Profile -->
                <div class="card">
                    <h3 style="color: var(--primary); margin-bottom: 1.5rem; border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">
                        <i class="fa-solid fa-school"></i> School Profile
                    </h3>
                    <form onsubmit="handleSchoolProfileUpdate(event)">
                        <div class="form-group">
                            <label>School Logo</label>
                            ${getSchoolInfo().logo ? `
                                <div style="margin-bottom: 0.5rem;">
                                    <img src="${getSchoolInfo().logo}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border);">
                                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">(Upload new to change)</p>
                                </div>
                            ` : ''}
                            <input type="file" class="form-control" name="school_logo" accept="image/*">
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                            <div class="form-group">
                                <label>School Name</label>
                                <input type="text" class="form-control" name="school_name" value="${getSchoolInfo().name}" required>
                            </div>
                            <div class="form-group">
                                <label>Principal Name</label>
                                <input type="text" class="form-control" name="principal_name" value="${getSchoolInfo().principal}" required>
                            </div>
                            <div class="form-group">
                                <label>School Email</label>
                                <input type="email" class="form-control" name="school_email" value="${getSchoolInfo().email}" required>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="text" class="form-control" name="school_phone" value="${getSchoolInfo().phone}" required>
                            </div>
                            <div class="form-group" style="grid-column: 1 / -1;">
                                <label>School Address</label>
                                <textarea class="form-control" name="school_address" rows="2" required>${getSchoolInfo().address}</textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">
                            <i class="fa-solid fa-save"></i> Save School Profile
                        </button>
                    </form>
                </div>

                <!-- System Users Management -->
                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">
                        <h3 style="color: var(--primary); margin: 0;">
                            <i class="fa-solid fa-users-gear"></i> User Account Management
                        </h3>
                        <button class="btn btn-primary btn-sm" onclick="showAddUserForm()"><i class="fa-solid fa-plus"></i> New User</button>
                    </div>
                    
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${appUsers.map(u => `
                                    <tr>
                                        <td><strong>${u.name}</strong></td>
                                        <td><code>${u.username}</code></td>
                                        <td><span class="status-badge" style="background:#f1f5f9; color:var(--primary);">${u.role}</span></td>
                                        <td>${u.email}</td>
                                        <td>
                                            <button class="btn btn-outline btn-sm" onclick="showAddUserForm('${u.username}')" title="Edit"><i class="fa-solid fa-pen"></i></button>
                                            <button class="btn btn-outline btn-sm" style="color:var(--warning);" onclick="deleteUser('${u.username}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- System Maintenance (Admin Only) -->
                ${getAdminInfo().username === getCurrentUser().username ? `
                <div class="card">
                    <h3 style="color: var(--primary); margin-bottom: 1.5rem; border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">
                        <i class="fa-solid fa-screwdriver-wrench"></i> System Maintenance
                    </h3>
                    <div style="padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <h4 style="margin-bottom: 0.5rem;">Student Portal Provisioning</h4>
                        <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 1rem;">Automatically create system login accounts for all registered students who don't have one. Default username is Student ID, default password is "123".</p>
                        <button class="btn btn-primary" onclick="provisionStudentAccounts()">
                            <i class="fa-solid fa-user-plus"></i> Generate Student Accounts
                        </button>
                    </div>
                </div>
                ` : ''}

                <!-- System Information -->
                <div class="card">
                    <h3 style="color: var(--primary); margin-bottom: 1.5rem; border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;">
                        <i class="fa-solid fa-info-circle"></i> System Information
                    </h3>
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 6px;">
                            <span style="color: var(--text-muted);">Total Students:</span>
                            <strong>${studentsData.length}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 6px;">
                            <span style="color: var(--text-muted);">Total Teachers:</span>
                            <strong>${teachersData.length}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 6px;">
                            <span style="color: var(--text-muted);">Total Exams:</span>
                            <strong>${examsData.length}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 6px;">
                            <span style="color: var(--text-muted);">Total Invoices:</span>
                            <strong>${invoicesData.length}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 6px;">
                            <span style="color: var(--text-muted);">System Version:</span>
                            <strong>1.0.0</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    notifications: () => `
        <div class="fade-in">
            <div class="card">
                <h3 style="color: var(--primary); margin-bottom: 1.5rem;">
                    <i class="fa-solid fa-bell"></i> Notifications
                </h3>
                <div style="display: grid; gap: 1rem;">
                    <div style="padding: 1rem; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <strong style="color: #1e3a8a;">System Update</strong>
                                <p style="margin-top: 0.5rem; color: #64748b;">Your school management system is up to date.</p>
                            </div>
                            <small style="color: #64748b;">Just now</small>
                        </div>
                    </div>
                    <div style="padding: 1rem; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <strong style="color: #15803d;">Data Saved</strong>
                                <p style="margin-top: 0.5rem; color: #64748b;">All your data is securely saved in browser storage.</p>
                            </div>
                            <small style="color: #64748b;">5 min ago</small>
                        </div>
                    </div>
                    <div style="padding: 1rem; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 6px;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <strong style="color: #92400e;">Reminder</strong>
                                <p style="margin-top: 0.5rem; color: #64748b;">Don't forget to backup your data regularly.</p>
                            </div>
                            <small style="color: #64748b;">1 hour ago</small>
                        </div>
                    </div>
                    <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                        <i class="fa-solid fa-check-circle" style="font-size: 3rem; color: var(--success); margin-bottom: 1rem;"></i>
                        <p>You're all caught up!</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Functions
function renderStudentRows(data) {
    return data.map(student => `
        <tr>
            <td><input type="checkbox" class="student-checkbox" value="${student.id}"></td>
            <td><strong>${student.id}</strong></td>
            <td>
                <div style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;" onclick="showStudentProfile('${student.id}')">
                    ${student.image
            ? `<img src="${student.image}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border);">`
            : `<div style="width: 32px; height: 32px; background: #E0E7FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 0.8rem; font-weight: 600;">${student.name.charAt(0)}</div>`
        }
                    <span style="font-weight: 500; color: var(--primary); text-decoration: underline; text-underline-offset: 4px;">${student.name}</span>
                </div>
            </td>
            <td>${student.grade}</td>
            <td><small>${student.phone}</small></td>
            <td><small>${student.parent}</small></td>
            <td><small>${student.dateJoined || 'N/A'}</small></td>
            <td><span class="status-badge ${student.status === 'Active' ? 'status-present' : 'status-absent'}">${student.status}</span></td>
            <td><span class="status-badge ${student.fees === 'Paid' ? 'status-present' : 'status-unpaid'}">${student.fees}</span></td>
            <td>
                <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; margin-right: 0.5rem;" title="Edit" onclick="editStudent('${student.id}')">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; margin-right: 0.5rem; color: var(--primary);" title="Generate ID Card" onclick="generateIDCard('student', '${student.id}')">
                    <i class="fa-solid fa-id-card"></i>
                </button>
                <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; color: var(--warning);" title="Delete" onclick="deleteStudent('${student.id}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function filterStudents() {
    const query = document.getElementById('studentSearch').value.toLowerCase();
    const filtered = studentsData.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.grade.toLowerCase().includes(query) ||
        s.id.toLowerCase().includes(query)
    );
    document.getElementById('student-table-body').innerHTML = renderStudentRows(filtered);
}

function renderInvoiceRows(data) {
    return data.map(inv => `
        <tr>
            <td>
                <div style="font-weight: 600; color: var(--primary);">${inv.student || 'Unknown'}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">ID: ${inv.studentId || 'N/A'}</div>
            </td>
            <td>${inv.amount}</td>
            <td style="color: ${inv.status === 'Balance' ? 'var(--warning)' : 'inherit'}; font-weight: ${inv.status === 'Balance' ? '600' : 'normal'};">
                ${inv.status === 'Balance' ? inv.balanceAmount || '$0' : '-'}
            </td>
            <td>${inv.date}</td>
            <td>
                <span class="status-badge ${inv.status === 'Paid' ? 'status-present' :
            inv.status === 'Balance' ? 'status-balance' :
                'status-unpaid'
        }">${inv.status}</span>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    ${inv.status !== 'Paid'
            ? `<button class="btn btn-primary" style="padding: 0.2rem 0.6rem; font-size: 0.8rem;" onclick="alert('Payment Reminder Sent!')">Remind</button>`
            : `<span style="color: var(--success); font-size: 0.9rem; margin-right: 0.5rem;"><i class="fa-solid fa-check"></i> Paid</span>`
        }
                    <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem;" onclick="editInvoice(${inv.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.8rem; color: var(--warning);" onclick="deleteInvoice(${inv.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterFees() {
    const query = document.getElementById('feeSearch').value.toLowerCase().trim();
    if (!query) {
        document.getElementById('fee-table-body').innerHTML = renderInvoiceRows(invoicesData);
        return;
    }

    const filtered = invoicesData.filter(inv => {
        const studentName = (inv.student || '').toLowerCase();
        const studentId = (inv.studentId || '').toLowerCase();

        // Find matching student in database
        const student = studentsData.find(s =>
            (s.id && s.id.toLowerCase() === studentId) ||
            (s.name && s.name.toLowerCase() === studentName)
        );

        const parentName = student ? (student.parent || '').toLowerCase() : '';

        return studentName.includes(query) ||
            studentId.includes(query) ||
            parentName.includes(query);
    });
    document.getElementById('fee-table-body').innerHTML = renderInvoiceRows(filtered);
}


function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function exportToCSV(section) {
    let data = [];
    let headers = [];
    let filename = "";

    switch (section) {
        case 'dashboard':
            const stats = getStats();
            data = [
                { Metric: 'Total Students', Value: stats.totalStudents },
                { Metric: 'Present Today', Value: stats.presentToday },
                { Metric: 'Fees Collected', Value: stats.feesCollected },
                { Metric: 'Pending Payments', Value: stats.pendingFees }
            ];
            headers = ['Metric', 'Value'];
            filename = "Dashboard_Summary.csv";
            break;
        case 'students':
            data = studentsData;
            headers = ['ID', 'Name', 'Age', 'Grade', 'Phone', 'Parent', 'Date Joined', 'Status', 'Fees'];
            filename = "Students_Report.csv";
            break;
        case 'teachers':
            data = teachersData;
            headers = ['ID', 'Name', 'Subject', 'Class Master', 'Phone'];
            filename = "Teachers_Report.csv";
            break;
        case 'fees':
            data = invoicesData;
            headers = ['ID', 'Student Name', 'Student ID', 'Amount', 'Date', 'Status'];
            filename = "Fees_Report.csv";
            break;
        case 'exams_schedule':
            data = examsData;
            headers = ['ID', 'Subject', 'Date', 'Grade', 'Status'];
            filename = "Exam_Schedule.csv";
            break;
        case 'exams_results':
            data = examResultsData;
            headers = ['Student ID', 'Student Name', 'Grade', 'Subject', 'Score', 'Result Grade'];
            filename = "Exam_Results.csv";
            break;
        case 'attendance':
            const table = document.querySelector('#attendance-table-body');
            if (!table || table.innerText.includes('Please select a class')) {
                alert('Please select a class first');
                return;
            }
            const rows = table.querySelectorAll('tr');
            headers = ['Student ID', 'Name', 'Status'];
            let attCsv = headers.join(',') + '\n';
            rows.forEach(row => {
                const cols = row.querySelectorAll('td');
                if (cols.length < 3) return;
                const rowData = [];
                rowData.push(cols[0].innerText);
                rowData.push(cols[1].innerText);
                const radio = row.querySelector('input[type="radio"]:checked');
                rowData.push(radio ? radio.value : 'N/A');
                attCsv += rowData.map(v => `"${v}"`).join(',') + '\n';
            });
            downloadCSV(attCsv, `Attendance_${new Date().toISOString().split('T')[0]}.csv`);
            return;
    }

    if (data.length === 0) {
        alert("No data to export");
        return;
    }

    let csv = headers.join(',') + '\n';
    data.forEach(item => {
        let row = [];
        if (section === 'dashboard') {
            row = [item.Metric, item.Value];
        } else if (section === 'students') {
            row = [item.id, item.name, item.age || 'N/A', item.grade, item.phone, item.parent, item.dateJoined, item.status, item.fees];
        } else if (section === 'teachers') {
            row = [item.id, item.name, item.subject, item.classMaster, item.phone];
        } else if (section === 'fees') {
            row = [item.id, item.student, item.studentId || 'N/A', item.amount, item.date, item.status];
        } else if (section === 'exams_schedule') {
            row = [item.id, item.subject, item.date, item.grade, item.status];
        } else if (section === 'exams_results') {
            row = [item.studentId || 'N/A', item.studentName || 'N/A', item.grade || 'N/A', item.subject || 'N/A', item.score || 'N/A', item.resultGrade || 'N/A'];
        }

        csv += row.map(val => `"${(val || '').toString().replace(/"/g, '""')}"`).join(',') + '\n';
    });

    downloadCSV(csv, filename);
}

function downloadReport() {
    exportToCSV('students'); // Also allow CSV download from reports
}

function navigateTo(target) {
    const user = getCurrentUser();
    const isAppUser = user && (user.role === 'Student' || user.role === 'Parent');

    // Reset Mobile App Layout by default
    if (target !== 'dashboard' || !isAppUser) {
        document.body.classList.remove('app-dark-layout');
        document.querySelector('.app-container').classList.remove('app-dark-layout');
        document.querySelector('.main-content').classList.remove('no-header');
        document.querySelector('.content-area').classList.remove('app-style');
    }

    // Update active nav
    navLinks.forEach(link => {
        if (link.dataset.target === target) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update Content
    if (views[target]) {
        contentArea.innerHTML = views[target]();
        pageTitle.innerText = target.charAt(0).toUpperCase() + target.slice(1);

        if (target === 'reports') {
            setTimeout(renderCharts, 100);
        }
        if (target === 'attendance') {
            setTimeout(() => loadAttendanceForGrade('All'), 50);
        }
        if (target === 'dashboard') {
            setTimeout(renderDashboardCharts, 100);
        }
    }
}

function showAddStudentForm(studentId = null) {
    // If it's an edit (studentId is provided), we generate the form and inject it.
    // If it's a new student, we can just navigate to the 'registration' view.

    if (studentId) {
        const student = studentsData.find(s => s.id === studentId);
        contentArea.innerHTML = getStudentFormHTML(student);
        pageTitle.innerText = "Edit Student";
    } else {
        navigateTo('registration');
    }
}

function getStudentFormHTML(student) {
    let title = "New Student Registration";
    let btnText = "Register Student";
    let isEdit = false;

    if (student) {
        title = "Edit Student";
        btnText = "Update Student";
        isEdit = true;
    }

    let levelOptions = '';
    let sectionOptions = '';

    // Parse existing grade (e.g. "10A" -> 10, A)
    let currentLevel = '';
    let currentSection = '';

    if (student && student.grade) {
        const match = student.grade.match(/(\d+)([A-Z]?)/);
        if (match) {
            currentLevel = match[1];
            currentSection = match[2];
        } else if (student.grade.startsWith('Grade ')) {
            currentLevel = student.grade.replace('Grade ', '');
        } else {
            // Just a number or "Grade X"
            currentLevel = student.grade.replace(/\D/g, '');
        }
    }

    // Levels 1-12
    for (let i = 1; i <= 12; i++) {
        levelOptions += `<option value="${i}" ${i.toString() === currentLevel ? 'selected' : ''}>Grade ${i}</option>`;
    }

    // Sections A-S
    const sections = "ABCDEFGHIJKLMNOPQRS".split('');
    sections.forEach(s => {
        sectionOptions += `<option value="${s}" ${s === currentSection ? 'selected' : ''}>Section ${s}</option>`;
    });

    const isPrimary = currentLevel && parseInt(currentLevel) <= 4;

    return `
        <div class="card form-container fade-in">
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary);">${title}</h3>
                <button class="btn btn-outline" onclick="navigateTo('students')">Cancel</button>
            </div>
            <form onsubmit="handleStudentSubmit(event, '${isEdit ? student.id : ''}')">
                <div class="form-group">
                    <label>Profile Image</label>
                    ${student && student.image ? `
                        <div style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 1rem;">
                            <img src="${student.image}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border);">
                            <span style="font-size: 0.85rem; color: var(--text-muted);">(Upload new to change)</span>
                        </div>
                    ` : ''}
                    <input type="file" class="form-control" name="profile_image" accept="image/*">
                </div>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control" name="name" required placeholder="e.g. John Doe" value="${student ? student.name : ''}">
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="number" class="form-control" name="age" required placeholder="e.g. 15" value="${student ? (student.age || '') : ''}">
                </div>
                <div class="form-group">
                    <label>Student ID (Format: BPSS...)</label>
                    <input type="text" class="form-control" name="custom_id" placeholder="e.g. BPSS1006" value="${student ? student.id : ''}">
                </div>
                <div class="form-group">
                    <label>Grade & Class</label>
                    <div style="display: flex; gap: 1rem;">
                        <select class="form-control" name="grade_level" required onchange="handleGradeChange(this)">
                            <option value="">Select Grade</option>
                            ${levelOptions}
                        </select>
                        <select class="form-control" name="grade_section" id="sectionSelect" ${isPrimary ? 'style="display:none;"' : ''} ${!isPrimary ? 'required' : ''}>
                            <option value="">Select Section</option>
                            ${sectionOptions}
                        </select>
                    </div>
                    <small class="text-muted" id="primaryNote" style="${isPrimary ? '' : 'display:none;'} margin-top: 0.5rem; display: block;">* Sections are not applicable for Primary Grades (1-4).</small>
                </div>
                <div class="form-group">
                    <label>School Fees ($)</label>
                    <input type="number" class="form-control" name="school_fees" placeholder="Enter Amount" value="${student && student.schoolFees ? student.schoolFees : ''}">
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" name="phone" placeholder="+1 555-0000" value="${student ? student.phone : ''}">
                </div>
                 <div class="form-group">
                    <label>Parent Name</label>
                    <input type="text" class="form-control" name="parent" placeholder="Parent Name" value="${student ? student.parent : ''}">
                </div>
                <div class="form-group">
                    <label>Date of Registration</label>
                    <input type="date" class="form-control" name="date_joined" value="${student && student.dateJoined ? student.dateJoined : new Date().toISOString().split('T')[0]}">
                </div>
                <input type="hidden" name="submit_action" id="submit_action" value="exit">
                <div style="display: flex; gap: 1rem;">
                    <button type="submit" class="btn btn-primary" style="flex: 1;" onclick="document.getElementById('submit_action').value='exit'">${btnText}</button>
                    ${!isEdit ? `<button type="button" class="btn btn-outline" style="flex: 1;" onclick="document.getElementById('submit_action').value='add_another'; this.form.dispatchEvent(new Event('submit', {cancelable: true}));">Save & Add Another</button>` : ''}
                </div>
            </form>
        </div>
    `;
}

function handleStudentSubmit(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');

    // Combine Level and Section (e.g., "10" + "A" = "10A")
    const gradeLevel = formData.get('grade_level');
    const gradeSection = formData.get('grade_section');

    let grade = "";
    if (parseInt(gradeLevel) <= 4) {
        grade = `Grade ${gradeLevel}`; // Primary: "Grade 1"
    } else {
        grade = `${gradeLevel}${gradeSection || ''}`; // Secondary: "10A" or "9" if no section selected
    }

    const phone = formData.get('phone');
    const age = formData.get('age');
    const parent = formData.get('parent');
    const customId = formData.get('custom_id');
    const dateJoined = formData.get('date_joined');
    const imageFile = formData.get('profile_image');
    const schoolFees = formData.get('school_fees');
    const action = formData.get('submit_action');

    const saveStudent = (imageUrl) => {
        if (id) {
            // Edit Mode
            const index = studentsData.findIndex(s => s.id === id);
            if (index !== -1) {
                const updatedId = customId && customId !== id ? customId : id;
                // Keep existing image if no new one provided
                const finalImage = imageUrl || studentsData[index].image;

                studentsData[index] = {
                    ...studentsData[index],
                    id: updatedId,
                    name,
                    age,
                    grade,
                    phone,
                    parent,
                    dateJoined,
                    schoolFees,
                    image: finalImage
                };
                saveData();
                alert(`Student ${name} updated successfully!`);
                navigateTo('students');
            }
        } else {
            // Add Mode
            const newId = customId || `BPSS${1000 + studentsData.length + 1}`;
            studentsData.unshift({
                id: newId,
                name: name,
                age: age,
                grade: grade,
                status: "Active",
                fees: "Unpaid",
                phone: phone || "N/A",
                parent: parent || "N/A",
                dateJoined: dateJoined,
                schoolFees: schoolFees,
                image: imageUrl || null
            });

            if (action === 'add_another') {
                alert(`Success! ${name} registered. Ready for next student.`);

                // Auto-create portal account for new student
                if (!appUsers.find(u => u.studentId === newId)) {
                    appUsers.push({
                        username: newId.toLowerCase(),
                        password: "123",
                        role: "Student",
                        name: name,
                        email: `${newId.toLowerCase()}@baidoaschool.edu`,
                        studentId: newId
                    });
                }

                // Clear specific fields for next entry, keep Grade/Fees/Date
                const form = e.target;
                form.querySelector('input[name="name"]').value = '';
                form.querySelector('input[name="phone"]').value = '';
                form.querySelector('input[name="parent"]').value = '';
                form.querySelector('input[name="profile_image"]').value = '';

                // Auto-increment ID for the next one immediately
                const nextId = `BPSS${1000 + studentsData.length + 1}`;
                form.querySelector('input[name="custom_id"]').value = nextId;

                // Focus back to Name
                form.querySelector('input[name="name"]').focus();
                saveData();
            } else {
                // Auto-create portal account for new student
                if (!appUsers.find(u => u.studentId === newId)) {
                    appUsers.push({
                        username: newId.toLowerCase(),
                        password: "123",
                        role: "Student",
                        name: name,
                        email: `${newId.toLowerCase()}@baidoaschool.edu`,
                        studentId: newId
                    });
                }
                saveData();
                alert(`Success! ${name} has been registered.`);
                navigateTo('students');
            }
        }
    };

    if (imageFile && imageFile.size > 0) {
        const reader = new FileReader();
        reader.onload = function (event) {
            saveStudent(event.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveStudent(null);
    }
}

function showAddFeeForm(invoiceId = null) {
    let invoice = null;
    let title = "Add New Invoice";
    let btnText = "Save Invoice";
    let isEdit = false;

    if (invoiceId) {
        invoice = invoicesData.find(inv => inv.id === invoiceId);
        if (invoice) {
            title = "Edit Invoice";
            btnText = "Update Invoice";
            isEdit = true;
        }
    }

    contentArea.innerHTML = `
        <div class="card form-container fade-in">
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary);">${title}</h3>
                <button class="btn btn-outline" onclick="navigateTo('fees')">Cancel</button>
            </div>
            <form onsubmit="handleFeeSubmit(event, ${isEdit ? invoiceId : 'null'})">
                <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 1rem;">
                    <div class="form-group">
                        <label>Student ID</label>
                        <input type="text" class="form-control" name="studentId" id="feeStudentId" required placeholder="ID" value="${invoice ? (invoice.studentId || '') : ''}" onkeyup="
                            const s = studentsData.find(stu => stu.id.toLowerCase() === this.value.toLowerCase().trim());
                            if(s) document.getElementById('feeStudentName').value = s.name;
                        ">
                    </div>
                    <div class="form-group">
                        <label>Student Name</label>
                        <input type="text" id="feeStudentName" class="form-control" name="student" required placeholder="Student Name" value="${invoice ? invoice.student : ''}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" name="amount" required placeholder="500" value="${invoice ? invoice.amount.replace('$', '') : ''}">
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" class="form-control" name="date" required value="${invoice ? (invoice.date.length > 7 ? invoice.date : invoice.date + '-01') : new Date().toISOString().split('T')[0]}">
                </div>
                 <div class="form-group">
                    <label>Status</label>
                    <select class="form-control" name="status" id="feeStatusSelect" onchange="
                        const balGroup = document.getElementById('balanceInputGroup');
                        if(this.value === 'Balance') balGroup.style.display = 'block';
                        else balGroup.style.display = 'none';
                    ">
                        <option ${invoice && invoice.status === 'Unpaid' ? 'selected' : ''}>Unpaid</option>
                        <option ${invoice && invoice.status === 'Balance' ? 'selected' : ''}>Balance</option>
                        <option ${invoice && invoice.status === 'Paid' ? 'selected' : ''}>Paid</option>
                    </select>
                </div>
                <div class="form-group" id="balanceInputGroup" style="display: ${invoice && invoice.status === 'Balance' ? 'block' : 'none'};">
                    <label>Remaining Balance Amount</label>
                    <input type="text" class="form-control" name="balanceAmount" placeholder="e.g. 250" value="${invoice ? (invoice.balanceAmount || '').replace('$', '') : ''}">
                    <small style="color: var(--text-muted);">How much is still owed?</small>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">${btnText}</button>
            </form>
            <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted); text-align: center;">
                <i class="fa-solid fa-circle-info"></i> Enter Student ID to auto-fill the name.
            </p>
        </div>
    `;
    pageTitle.innerText = title;
}

function handleFeeSubmit(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const student = formData.get('student');
    const studentId = formData.get('studentId');
    const amount = "$" + formData.get('amount').replace('$', '');
    const date = formData.get('date');
    const status = formData.get('status');
    const balanceAmount = status === 'Balance' ? "$" + formData.get('balanceAmount').replace('$', '') : '';

    if (id) {
        // Edit Mode
        const index = invoicesData.findIndex(inv => inv.id === id);
        if (index !== -1) {
            invoicesData[index] = { ...invoicesData[index], student, studentId, amount, date, status, balanceAmount };
            saveData();
            alert("Invoice updated successfully!");
        }
    } else {
        // Add Mode
        invoicesData.unshift({
            id: Date.now(),
            student,
            studentId,
            amount,
            date,
            status,
            balanceAmount
        });
        saveData();
        alert("Invoice added successfully!");
    }

    navigateTo('fees');
}

function deleteInvoice(id) {
    if (confirm("Are you sure you want to delete this invoice?")) {
        const index = invoicesData.findIndex(inv => inv.id === id);
        if (index !== -1) {
            invoicesData.splice(index, 1);
            saveData();
            navigateTo('fees');
        }
    }
}

function editInvoice(id) {
    showAddFeeForm(id);
}

function showAddExamForm() {
    let levelOptions = '';
    for (let i = 1; i <= 12; i++) levelOptions += `<option value="${i}">Grade ${i}</option>`;

    let sectionOptions = '';
    "ABCDEFGHIJKLMNOPQRS".split('').forEach(s => sectionOptions += `<option value="${s}">Section ${s}</option>`);

    contentArea.innerHTML = `
        <div class="card form-container fade-in">
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary);">Schedule Exams</h3>
                <button class="btn btn-outline" onclick="navigateTo('exams')">Cancel</button>
            </div>
            <form onsubmit="handleExamSubmit(event)">
                <div class="form-group">
                    <label>Select Class</label>
                    <div style="display: flex; gap: 1rem;">
                        <select class="form-control" name="grade_level" required onchange="handleGradeChange(this)">
                            <option value="">Select Grade</option>
                            ${levelOptions}
                        </select>
                        <select class="form-control" name="grade_section" id="sectionSelect" required>
                            <option value="">Select Section</option>
                            ${sectionOptions}
                        </select>
                    </div>
                    <small class="text-muted" id="primaryNote" style="display:none; margin-top: 0.5rem;">* Sections are not applicable for Primary Grades (1-4).</small>
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" class="form-control" name="date" required value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="form-group">
                    <label style="margin-bottom: 0.5rem; display: block;">Select Subjects</label>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        ${availableSubjects.map(subject => `
                            <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border: 1px solid var(--border); border-radius: 6px; cursor: pointer;">
                                <input type="checkbox" name="subjects" value="${subject}"> ${subject}
                            </label>
                        `).join('')}
                    </div>
                </div>
                <div class="form-group">
                    <label>Other Subjects (comma separated)</label>
                    <input type="text" class="form-control" name="custom_subjects" placeholder="e.g. Art, P.E.">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Schedule Selected Exams</button>
            </form>
        </div>
    `;
    pageTitle.innerText = "Schedule Exams";
}

function handleExamSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Combine Level and Section
    const gradeLevel = formData.get('grade_level');
    const gradeSection = formData.get('grade_section');
    let grade = "";
    if (parseInt(gradeLevel) <= 4) {
        grade = `Grade ${gradeLevel}`;
    } else {
        grade = `${gradeLevel}${gradeSection}`;
    }

    const date = formData.get('date');
    const subjects = formData.getAll('subjects'); // Get all checked checkboxes
    const customSubjects = formData.get('custom_subjects');

    if (customSubjects) {
        const others = customSubjects.split(',').map(s => s.trim()).filter(s => s.length > 0);
        others.forEach(subj => {
            if (!availableSubjects.includes(subj)) {
                availableSubjects.push(subj); // Add to persistent list
            }
        });
        subjects.push(...others);
    }

    if (subjects.length === 0) {
        alert("Please select at least one subject or type a custom one.");
        return;
    }

    subjects.forEach(subject => {
        examsData.unshift({
            id: examsData.length + 1,
            subject: subject,
            date: date,
            grade: grade,
            status: "Scheduled"
        });
    });

    saveData();
    alert(`Successfully scheduled ${subjects.length} exams for ${grade}.`);
    navigateTo('exams');
}

function deleteStudent(id) {
    if (confirm("Are you sure you want to delete this student?")) {
        const index = studentsData.findIndex(s => s.id === id);
        if (index !== -1) {
            studentsData.splice(index, 1);
            saveData();
            // Refresh the updated list
            navigateTo('students');
        }
    }
}

function showStudentProfile(id) {
    const user = getCurrentUser();

    // Security Restriction: Students can only see their own profile
    if (user.role === 'Student' && user.studentId !== id) {
        alert("Access Denied: You can only view your own profile.");
        navigateTo('dashboard');
        return;
    }

    const isStudent = user.role === 'Student';
    const student = studentsData.find(s => s.id === id);
    if (!student) return;

    // Filter related data by Name (assuming unique names for mock data simplicity)
    const studentFees = invoicesData.filter(inv => inv.studentId === student.id);
    const studentResults = examResultsData.filter(res => res.student === student.name);

    // Stats
    const totalExams = studentResults.length;
    const totalPaid = studentFees.filter(f => f.status === 'Paid').reduce((acc, curr) => acc + parseInt(curr.amount.replace('$', '')), 0);
    const totalPending = studentFees.filter(f => f.status === 'Unpaid').reduce((acc, curr) => acc + parseInt(curr.amount.replace('$', '')), 0);

    contentArea.innerHTML = `
        <div class="fade-in">
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <button class="btn btn-outline" onclick="navigateTo('${isStudent ? 'dashboard' : 'students'}')" style="border: none; padding-left: 0;"><i class="fa-solid fa-arrow-left"></i> Back</button>
                    <h2 style="margin: 0; color: var(--primary);">${isStudent ? 'My Profile' : 'Student Profile'}</h2>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-outline" onclick="generateIDCard('student', '${student.id}')"><i class="fa-solid fa-id-card"></i> ID Card</button>
                    <button class="btn btn-primary" onclick="printStudentProfile('${student.id}')"><i class="fa-solid fa-print"></i> Print</button>
                    ${isStudent ? '' : `<button class="btn btn-outline" onclick="editStudent('${student.id}')"><i class="fa-solid fa-pen"></i> Edit Profile</button>`}
                </div>
            </div>

            <!-- Profile Header -->
            <div class="card" style="margin-bottom: 2rem; display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
                ${student.image
            ? `<img src="${student.image}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid var(--background);">`
            : `<div style="width: 120px; height: 120px; background: #E0E7FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 3rem; font-weight: 600;">${student.name.charAt(0)}</div>`
        }
                <div style="flex: 1;">
                    <h2 style="margin-bottom: 0.5rem;">${student.name}</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; color: var(--text-muted);">
                        <div><i class="fa-solid fa-id-card"></i> ${student.id}</div>
                        <div><i class="fa-solid fa-cake-candles"></i> Age: ${student.age || 'N/A'}</div>
                        <div><i class="fa-solid fa-layer-group"></i> ${student.grade}</div>
                        <div><i class="fa-solid fa-phone"></i> ${student.phone}</div>
                        <div><i class="fa-solid fa-user-group"></i> ${student.parent}</div>
                        <div><i class="fa-regular fa-calendar"></i> Joined: ${student.dateJoined || 'N/A'}</div>
                        <div><i class="fa-solid fa-circle-info"></i> Status: <span style="color: ${student.status === 'Active' ? 'var(--success)' : 'var(--warning)'}">${student.status}</span></div>
                    </div>
                </div>
            </div>

             <div class="dashboard-grid">
                <!-- Exam Results -->
                <div class="card" style="grid-column: span 2;">
                    <h3 style="margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
                        <i class="fa-solid fa-graduation-cap" style="color: var(--primary);"></i> Exam Results (${totalExams})
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Score</th>
                                <th>Grade</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${studentResults.length > 0 ? studentResults.map(res => `
                                <tr>
                                    <td>${res.subject}</td>
                                    <td><strong>${res.score}%</strong></td>
                                    <td>${res.status}</td>
                                    <td><span class="status-badge" style="background-color: ${res.score >= 50 ? '#DCFCE7' : '#FEE2E2'}; color: ${res.score >= 50 ? '#16A34A' : '#DC2626'};">${res.score >= 50 ? 'Pass' : 'Fail'}</span></td>
                                </tr>
                            `).join('') : '<tr><td colspan="4" style="text-align: center; padding: 1rem; color: var(--text-muted);">No exam results recorded.</td></tr>'}
                        </tbody>
                    </table>
                </div>

                <!-- Fee History -->
                <div class="card">
                     <h3 style="margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
                        <i class="fa-solid fa-wallet" style="color: var(--warning);"></i> Fee History
                    </h3>
                    <div style="margin-bottom: 1rem; display: flex; gap: 1rem;">
                        <div style="flex: 1; padding: 0.5rem; background: #F3F4F6; border-radius: 6px; text-align: center;">
                            <small>Total Paid</small>
                            <div style="font-weight: bold; color: var(--success);">$${totalPaid}</div>
                        </div>
                        <div style="flex: 1; padding: 0.5rem; background: #F3F4F6; border-radius: 6px; text-align: center;">
                            <small>Pending</small>
                            <div style="font-weight: bold; color: var(--warning);">$${totalPending}</div>
                        </div>
                    </div>
                    <table>
                         <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                             ${studentFees.length > 0 ? studentFees.map(fee => `
                                <tr>
                                    <td><small>${fee.date.substring(0, 7)}</small></td>
                                    <td>${fee.amount}</td>
                                    <td><span class="status-badge ${fee.status === 'Paid' ? 'status-present' : 'status-unpaid'}" style="padding: 0.1rem 0.4rem; font-size: 0.75rem;">${fee.status}</span></td>
                                </tr>
                            `).join('') : '<tr><td colspan="3" style="text-align: center; padding: 1rem; color: var(--text-muted);">No fee records found.</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    pageTitle.innerText = "Student Details";
}

function toggleSelectAll(source) {
    const checkboxes = document.querySelectorAll('.student-checkbox');
    checkboxes.forEach(cb => cb.checked = source.checked);
}

function deleteSelectedStudents() {
    const selected = Array.from(document.querySelectorAll('.student-checkbox:checked')).map(cb => cb.value);

    if (selected.length === 0) {
        alert("No students selected.");
        return;
    }

    if (confirm(`Are you sure you want to delete ${selected.length} students?`)) {
        selected.forEach(id => {
            const index = studentsData.findIndex(s => s.id === id);
            if (index !== -1) {
                studentsData.splice(index, 1);
            }
        });
        saveData();
        navigateTo('students');
    }
}

function editStudent(id) {
    showAddStudentForm(id);
}

function deleteExam(id) {
    if (confirm("Are you sure you want to cancel this exam?")) {
        const index = examsData.findIndex(e => e.id === id);
        if (index !== -1) {
            examsData.splice(index, 1);
            saveData();
            navigateTo('exams');
        }
    }
}

function renderCharts() {
    // Attendance Chart
    const attendanceCanvas = document.getElementById('attendanceChart');
    if (!attendanceCanvas) return;
    const ctxAttendance = attendanceCanvas.getContext('2d');
    new Chart(ctxAttendance, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Present Students',
                data: [1150, 1180, 1170, 1160, 1180],
                borderColor: '#16A34A',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // Fees Chart
    const feesCanvas = document.getElementById('feesChart');
    if (!feesCanvas) return;
    const ctxFees = feesCanvas.getContext('2d');
    new Chart(ctxFees, {
        type: 'doughnut',
        data: {
            labels: ['Collected', 'Pending'],
            datasets: [{
                data: [45200, 4800],
                backgroundColor: ['#1E3A8A', '#FACC15'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // Grades Chart
    const gradesCanvas = document.getElementById('gradesChart');
    if (!gradesCanvas) return;
    const ctxGrades = gradesCanvas.getContext('2d');
    new Chart(ctxGrades, {
        type: 'bar',
        data: {
            labels: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
            datasets: [{
                label: 'Average Score',
                data: [78, 82, 75, 85],
                backgroundColor: '#2563EB',
                borderRadius: 4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function renderDashboardCharts() {
    // Fees Chart (Pie)
    // Calculate actual pending/collected from data
    const totalCollected = invoicesData.filter(i => i.status === 'Paid').reduce((acc, curr) => acc + parseInt(curr.amount.replace('$', '')), 0);
    const totalPending = invoicesData.filter(i => i.status === 'Unpaid').reduce((acc, curr) => acc + parseInt(curr.amount.replace('$', '')), 0);

    const feeCanvas = document.getElementById('dashFeesChart');
    if (!feeCanvas) return;
    const ctxFees = feeCanvas.getContext('2d');
    new Chart(ctxFees, {
        type: 'doughnut',
        data: {
            labels: ['Collected', 'Pending'],
            datasets: [{
                data: [totalCollected || 45200, totalPending || 5000], // Fallback to statsData if mock invoices empty
                backgroundColor: ['#16A34A', '#FACC15'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // Students per Grade (Bar)
    // Group students by grade
    const gradeCounts = {};
    studentsData.forEach(s => {
        const g = s.grade.replace(/\D/g, ''); // Extract number to group by level mostly, or keep full string
        const label = s.grade;
        gradeCounts[label] = (gradeCounts[label] || 0) + 1;
    });

    const labels = Object.keys(gradeCounts).sort();
    const data = labels.map(l => gradeCounts[l]);

    const studentCanvas = document.getElementById('dashStudentsChart');
    if (!studentCanvas) return;
    const ctxStudents = studentCanvas.getContext('2d');
    new Chart(ctxStudents, {
        type: 'bar',
        data: {
            labels: labels.length > 0 ? labels : ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
            datasets: [{
                label: 'Student Count',
                data: data.length > 0 ? data : [120, 150, 110, 130],
                backgroundColor: '#3B82F6',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function showAddTeacherForm(teacherId = null) {
    let teacher = null;
    let title = "Add New Teacher";
    let btnText = "Save Teacher";
    let isEdit = false;

    if (teacherId) {
        teacher = teachersData.find(t => t.id === teacherId);
        if (teacher) {
            title = "Edit Teacher";
            btnText = "Update Teacher";
            isEdit = true;
        }
    }

    contentArea.innerHTML = `
        <div class="card form-container fade-in">
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary);">${title}</h3>
                <button class="btn btn-outline" onclick="navigateTo('teachers')">Cancel</button>
            </div>
            <form onsubmit="handleTeacherSubmit(event, ${isEdit ? teacherId : 'null'})">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control" name="name" required placeholder="e.g. Mr. Anderson" value="${teacher ? teacher.name : ''}">
                </div>
                <div class="form-group">
                    <label>Subject</label>
                    <select class="form-control" name="subject">
                        <option value="">Select Subject</option>
                        ${availableSubjects.map(s => `<option value="${s}" ${teacher && teacher.subject === s ? 'selected' : ''}>${s}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Class Master (Optional)</label>
                    <input type="text" class="form-control" name="class_master" placeholder="e.g. 10A" value="${teacher ? teacher.classMaster : ''}">
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" name="phone" placeholder="+1 555-0000" value="${teacher ? teacher.phone : ''}">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">${btnText}</button>
            </form>
        </div>
    `;
    pageTitle.innerText = title;
}

function handleTeacherSubmit(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const classMaster = formData.get('class_master') || "N/A";
    const phone = formData.get('phone');

    if (id) {
        // Edit Mode
        const index = teachersData.findIndex(t => t.id === id);
        if (index !== -1) {
            teachersData[index] = { ...teachersData[index], name, subject, classMaster, phone };
            saveData();
            alert(`Teacher ${name} updated successfully!`);
        }
    } else {
        // Add Mode
        teachersData.push({
            id: teachersData.length + 1,
            name,
            subject,
            classMaster,
            phone
        });
        saveData();
        alert(`Teacher ${name} added successfully!`);
    }

    navigateTo('teachers');
}

function deleteTeacher(id) {
    if (confirm("Are you sure you want to delete this teacher?")) {
        const index = teachersData.findIndex(t => t.id === id);
        if (index !== -1) {
            teachersData.splice(index, 1);
            saveData();
            navigateTo('teachers');
        }
    }
}

function editTeacher(id) {
    showAddTeacherForm(id);
}

function handleGradeChange(select) {
    const level = parseInt(select.value);
    const sectionSelect = document.getElementById('sectionSelect');
    const note = document.getElementById('primaryNote');

    if (level <= 4) {
        sectionSelect.style.display = 'none';
        sectionSelect.removeAttribute('required');
        sectionSelect.value = "";
        note.style.display = 'block';
    } else {
        sectionSelect.style.display = 'block';
        sectionSelect.setAttribute('required', 'true');
        note.style.display = 'none';
    }
}
function switchExamTab(tab) {
    const scheduleView = document.getElementById('view-schedule');
    const resultsView = document.getElementById('view-results');
    const tabSchedule = document.getElementById('tab-schedule');
    const tabResults = document.getElementById('tab-results');

    if (tab === 'schedule') {
        scheduleView.style.display = 'block';
        resultsView.style.display = 'none';
        tabSchedule.style.borderBottom = '2px solid var(--primary)';
        tabSchedule.style.color = 'var(--primary)';
        tabSchedule.style.fontWeight = '600';
        tabResults.style.borderBottom = 'none';
        tabResults.style.color = 'var(--text-muted)';
        tabResults.style.fontWeight = '400';
    } else {
        scheduleView.style.display = 'none';
        resultsView.style.display = 'block';
        tabResults.style.borderBottom = '2px solid var(--primary)';
        tabResults.style.color = 'var(--primary)';
        tabResults.style.fontWeight = '600';
        tabSchedule.style.borderBottom = 'none';
        tabSchedule.style.color = 'var(--text-muted)';
        tabSchedule.style.fontWeight = '400';
    }
}

function renderExamResults(data) {
    if (data.length === 0) return '<tr><td colspan="5" style="text-align:center; padding: 2rem;">No results found.</td></tr>';

    return data.map(res => `
        <tr>
            <td>
                <div style="font-weight: 500;">${res.student}</div>
            </td>
            <td>${res.grade}</td>
            <td>${res.subject}</td>
            <td>
                <span style="font-weight: bold; color: ${res.score >= 50 ? 'var(--primary)' : 'var(--warning)'};">${res.score}%</span>
            </td>
            <td>
                <span class="status-badge" style="background-color: ${res.score >= 50 ? '#DCFCE7' : '#FEE2E2'}; color: ${res.score >= 50 ? '#16A34A' : '#DC2626'};">
                    ${res.status}
                </span>
            </td>
        </tr>
    `).join('');
}

function filterResultsByClass(grade) {
    if (grade === 'All') {
        document.getElementById('exam-results-body').innerHTML = renderExamResults(examResultsData);
    } else {
        const filtered = examResultsData.filter(r => r.grade === grade);
        document.getElementById('exam-results-body').innerHTML = renderExamResults(filtered);
    }
}

function showAddResultForm() {
    contentArea.innerHTML = `
        <div class="card form-container fade-in">
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: var(--primary);">Enter Exam Results</h3>
                <button class="btn btn-outline" onclick="navigateTo('exams'); setTimeout(() => switchExamTab('results'), 50);">Cancel</button>
            </div>
            <form onsubmit="handleResultSubmit(event)">
                <div class="form-group">
                    <label>Student Name</label>
                    <input type="text" class="form-control" name="student" required placeholder="e.g. Alice Johnson">
                </div>
                <div class="form-group">
                    <label>Grade & Class</label>
                    <div style="display: flex; gap: 1rem;">
                        <select class="form-control" name="grade_level" required onchange="handleGradeChange(this)">
                            <option value="">Select Grade</option>
                            ${function () { let o = ''; for (let i = 1; i <= 12; i++) o += `<option value="${i}">Grade ${i}</option>`; return o; }()}
                        </select>
                        <select class="form-control" name="grade_section" id="sectionSelect" required>
                            <option value="">Select Section</option>
                            ${function () { let o = ''; "ABCDEFGHIJKLMNOPQRS".split('').forEach(s => o += `<option value="${s}">Section ${s}</option>`); return o; }()}
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Subject</label>
                    <select class="form-control" name="subject">
                         ${availableSubjects.map(s => `<option value="${s}">${s}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Score (0-100)</label>
                    <input type="number" class="form-control" name="score" min="0" max="100" required placeholder="85">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Save Result</button>
            </form>
        </div>
    `;
    pageTitle.innerText = "Enter Results";
}

function handleResultSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const score = parseInt(formData.get('score'));

    // Combine Level and Section
    const gradeLevel = formData.get('grade_level');
    const gradeSection = formData.get('grade_section');
    let grade = "";
    if (parseInt(gradeLevel) <= 4) {
        grade = `Grade ${gradeLevel}`;
    } else {
        grade = `${gradeLevel}${gradeSection}`;
    }

    let status = 'F';
    if (score >= 90) status = 'A+';
    else if (score >= 80) status = 'A';
    else if (score >= 70) status = 'B';
    else if (score >= 60) status = 'C';
    else if (score >= 50) status = 'D';

    examResultsData.unshift({
        id: examResultsData.length + 1,
        student: formData.get('student'),
        grade: grade, // Use the constructed grade string
        subject: formData.get('subject'),
        score: score,
        status: status
    });

    saveData();
    alert("Result added successfully!");
    navigateTo('exams'); // Reset view
    setTimeout(() => switchExamTab('results'), 50); // Switch back to results tab
}

function loadAttendanceForGrade(grade) {
    const tbody = document.getElementById('attendance-table-body');
    if (!tbody) return;
    const date = document.getElementById('attStudentDate').value;

    const createRow = (s) => {
        const history = attendanceHistory.find(a => a.id === s.id && a.date === date && a.type === 'student');
        const isPresent = history ? history.status === 'Present' : true; // Default present

        return `
        <tr>
            <td><strong>${s.id}</strong></td>
            <td>${s.name}</td>
            <td>
                <div style="display: flex; gap: 1.5rem;">
                    <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <input type="radio" name="status_${s.id}" value="Present" ${isPresent ? 'checked' : ''} style="accent-color: var(--success); transform: scale(1.2);"> 
                        <span style="color: var(--success); font-weight: 500;">Present</span>
                    </label>
                    <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <input type="radio" name="status_${s.id}" value="Absent" ${!isPresent ? 'checked' : ''} style="accent-color: var(--warning); transform: scale(1.2);"> 
                        <span style="color: var(--warning); font-weight: 500;">Absent</span>
                    </label>
                </div>
            </td>
        </tr>`;
    };

    if (grade === 'All') {
        const grades = [...new Set(studentsData.map(s => s.grade))].sort();
        let html = '';
        grades.forEach(g => {
            const classStudents = studentsData.filter(s => s.grade === g);
            if (classStudents.length > 0) {
                html += `<tr style="background-color: #f9fafb;"><td colspan="3" style="font-weight: 700; color: var(--primary); padding: 1rem 0.5rem;">${g}</td></tr>`;
                html += classStudents.map(s => createRow(s)).join('');
            }
        });
        tbody.innerHTML = html || '<tr><td colspan="3" style="text-align: center;">No students found.</td></tr>';
    } else {
        const students = studentsData.filter(s => s.grade === grade);
        tbody.innerHTML = students.map(s => createRow(s)).join('') || '<tr><td colspan="3" style="text-align: center;">No students found in this class.</td></tr>';
    }
}

function markAllPresent() {
    const radios = document.querySelectorAll('#attendance-table-body input[value="Present"]');
    radios.forEach(r => r.checked = true);
}

function markAllAbsent() {
    const radios = document.querySelectorAll('#attendance-table-body input[value="Absent"]');
    radios.forEach(r => r.checked = true);
}

// Attendance Helper Functions
function getAttendancePercentage(date, type = 'student') {
    const total = type === 'student' ? studentsData.length : teachersData.length;
    if (total === 0) return 100;
    const present = attendanceHistory.filter(a => a.date === date && a.type === type && a.status === 'Present').length;
    return Math.round((present / total) * 100);
}

function switchAttendanceTab(tab) {
    const views = ['students', 'teachers', 'reports'];
    views.forEach(v => {
        document.getElementById(`view-att-${v}`).style.display = (v === tab) ? 'block' : 'none';
        const btn = document.getElementById(`att-tab-${v}`);
        if (v === tab) {
            btn.style.borderBottom = '2px solid var(--primary)';
            btn.style.color = 'var(--primary)';
            btn.style.fontWeight = '600';
        } else {
            btn.style.borderBottom = 'none';
            btn.style.color = 'var(--text-muted)';
            btn.style.fontWeight = '400';
        }
    });

    if (tab === 'teachers') loadTeacherAttendance();
    if (tab === 'reports') loadMonthlyAttendanceReport(document.getElementById('reportMonth').value);
}

function loadTeacherAttendance() {
    const date = document.getElementById('attTeacherDate').value;
    const percent = getAttendancePercentage(date, 'teacher');
    document.getElementById('teacherAttPercent').innerText = `${percent}%`;

    const tbody = document.getElementById('teacher-attendance-body');
    tbody.innerHTML = teachersData.map(t => {
        const history = attendanceHistory.find(a => a.id === t.id && a.date === date && a.type === 'teacher');
        const isPresent = history ? history.status === 'Present' : true; // Default present

        return `
        <tr>
            <td><strong>TCH-${t.id}</strong></td>
            <td>${t.name} <small style="display:block; color:var(--text-muted);">${t.subject}</small></td>
            <td>
                <div style="display: flex; gap: 1rem;">
                    <label><input type="radio" name="status_${t.id}" value="Present" ${isPresent ? 'checked' : ''}> Present</label>
                    <label><input type="radio" name="status_${t.id}" value="Absent" ${!isPresent ? 'checked' : ''}> Absent</label>
                </div>
            </td>
        </tr>`;
    }).join('');
}

function handleAttendanceSubmit(e, type) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
    btn.disabled = true;

    const dateField = type === 'student' ? 'attStudentDate' : 'attTeacherDate';
    const date = document.getElementById(dateField).value;
    const formData = new FormData(e.target);

    // Remove existing entries for this date/type to avoid duplicates
    attendanceHistory = attendanceHistory.filter(a => !(a.date === date && a.type === type));

    for (let [key, value] of formData.entries()) {
        if (key.startsWith('status_')) {
            const id = key.replace('status_', '');
            attendanceHistory.push({
                date: date,
                id: id,
                type: type,
                status: value
            });

            // Sync status back to main data if student
            if (type === 'student') {
                const s = studentsData.find(stu => stu.id === id);
                if (s) s.status = value;
            }
        }
    }

    setTimeout(() => {
        saveData();
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} attendance saved!`);
        if (type === 'student') navigateTo('attendance');
        else loadTeacherAttendance();
    }, 600);
}

function loadMonthlyAttendanceReport(month) {
    const filtered = attendanceHistory.filter(a => a.date.startsWith(month));
    const statsArea = document.getElementById('monthlyStatsArea');
    const topArea = document.getElementById('topStudentsArea');
    const logBody = document.getElementById('reportLogBody');

    if (filtered.length === 0) {
        statsArea.innerHTML = '<p style="text-align:center; padding: 1rem;">No data for this month.</p>';
        topArea.innerHTML = '<p style="text-align:center; padding: 1rem;">-</p>';
        logBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No records</td></tr>';
        return;
    }

    // Stats
    const totalPresent = filtered.filter(a => a.status === 'Present').length;
    const rate = Math.round((totalPresent / filtered.length) * 100);
    statsArea.innerHTML = `
        <div style="text-align:center;">
            <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary);">${rate}%</div>
            <div style="color: var(--text-muted);">Overall Attendance Rate</div>
            <div style="display:flex; justify-content: space-around; margin-top: 1.5rem;">
                <div><strong style="color: var(--success);">${totalPresent}</strong><br><small>Present</small></div>
                <div><strong style="color: var(--warning);">${filtered.length - totalPresent}</strong><br><small>Absent</small></div>
            </div>
        </div>`;

    // Top Students (simplified)
    const studentStats = {};
    filtered.filter(a => a.type === 'student').forEach(a => {
        if (!studentStats[a.id]) studentStats[a.id] = { name: '', present: 0, total: 0 };
        studentStats[a.id].total++;
        if (a.status === 'Present') studentStats[a.id].present++;
        // Find name
        if (!studentStats[a.id].name) {
            const s = studentsData.find(stu => stu.id === a.id);
            if (s) studentStats[a.id].name = s.name;
        }
    });

    const topStudents = Object.values(studentStats)
        .sort((a, b) => (b.present / b.total) - (a.present / a.total))
        .slice(0, 5);

    topArea.innerHTML = topStudents.map(s => `
        <div style="display:flex; justify-content:space-between; padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9;">
            <span>${s.name}</span>
            <strong style="color:var(--success);">${Math.round((s.present / s.total) * 100)}%</strong>
        </div>`).join('');

    // Detailed Log (last 20 entries)
    logBody.innerHTML = filtered.slice(-20).reverse().map(a => {
        const s = a.type === 'student' ? studentsData.find(stu => stu.id === a.id) : teachersData.find(t => t.id == a.id);
        const name = s ? s.name : 'Unknown';
        const grade = (a.type === 'student' && s) ? s.grade : 'Staff';
        return `
            <tr>
                <td>${a.date}</td>
                <td>${name}</td>
                <td>${grade}</td>
                <td><span class="status-badge ${a.status === 'Present' ? 'status-present' : 'status-absent'}">${a.status}</span></td>
            </tr>`;
    }).join('');
}

function simulateQRScan() {
    const modal = document.createElement('div');
    modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:10000; display:flex; align-items:center; justify-content:center; color:white; flex-direction:column;";
    modal.innerHTML = `
        <div style="border: 2px solid white; width: 250px; height: 250px; border-radius: 20px; position:relative; overflow:hidden;">
            <div style="position:absolute; top:0; left:0; width:100%; height:2px; background:var(--primary); animation: scanLine 2s linear infinite;"></div>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=BPSS-STUDENT" style="width:100%; opacity:0.3;">
        </div>
        <h3 style="margin-top: 2rem;">Searching for Student Badge...</h3>
        <p style="margin-top:0.5rem; color:#ccc;">Point camera at student ID card</p>
        <button class="btn btn-primary" style="margin-top: 2rem;" onclick="this.parentElement.remove(); executeMockScan()">Simulate Found: Alice Johnson</button>
        <button class="btn btn-outline" style="margin-top: 1rem; color:white;" onclick="this.parentElement.remove()">Cancel</button>

        <style>
            @keyframes scanLine {
                0% { top: 0; }
                50% { top: 100%; }
                100% { top: 0; }
            }
        </style>
    `;
    document.body.appendChild(modal);
}

function executeMockScan() {
    // Simulated scan result from our professional QR code (JSON format)
    // The Professional ID cards now encode: {"action":"view_profile","role":"STUDENT","id":"SBT-001"}
    const mockScanData = { action: 'view_profile', role: 'STUDENT', id: 'SBT-001' };

    const date = document.getElementById('attStudentDate') ? document.getElementById('attStudentDate').value : new Date().toISOString().split('T')[0];
    const studentId = mockScanData.id;

    // 1. Mark Attendance
    attendanceHistory = attendanceHistory.filter(a => !(a.date === date && a.id === studentId));
    attendanceHistory.push({
        date: date,
        id: studentId,
        type: 'student',
        status: 'Present'
    });
    saveData();

    // 2. High-end Visual Feedback
    alert(`🔐 QR VERIFIED: ${studentId}\nMarked PRESENT for ${date}\nRedirecting to Student Record...`);

    // 3. Institutional Integration: Show Profile
    showStudentProfile(studentId);
}

function exportAttendanceCSV() {
    const month = document.getElementById('reportMonth').value;
    const filtered = attendanceHistory.filter(a => a.date.startsWith(month));
    if (filtered.length === 0) return alert("No data to export");

    let csv = "Date,ID,Type,Name,Status\n";
    filtered.forEach(a => {
        const s = a.type === 'student' ? studentsData.find(stu => stu.id === a.id) : teachersData.find(t => t.id == a.id);
        const name = s ? s.name : 'Unknown';
        csv += `${a.date},${a.id},${a.type},"${name}",${a.status}\n`;
    });

    downloadCSV(csv, `Attendance_Report_${month}.csv`);
}

// School Profile & Admin Settings Functions
function printStudentProfile(id) {
    const student = studentsData.find(s => s.id === id);
    if (!student) return;

    const studentFees = invoicesData.filter(inv => inv.student === student.name);
    const studentResults = examResultsData.filter(res => res.student === student.name);
    const totalPaid = studentFees.filter(f => f.status === 'Paid').reduce((acc, curr) => acc + parseInt(curr.amount.replace('$', '').replace(',', '')), 0);
    const totalPending = studentFees.filter(f => f.status === 'Unpaid').reduce((acc, curr) => acc + parseInt(curr.amount.replace('$', '').replace(',', '')), 0);
    const schoolInfo = getSchoolInfo();

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Profile - ${student.name}</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'Arial', sans-serif;
                    padding: 2rem;
                    color: #1e293b;
                }
                .header {
                    text-align: center;
                    border-bottom: 3px solid #1e3a8a;
                    padding-bottom: 1rem;
                    margin-bottom: 2rem;
                }
                .header h1 {
                    color: #1e3a8a;
                    font-size: 1.8rem;
                    margin-bottom: 0.5rem;
                }
                .header p {
                    color: #64748b;
                    font-size: 0.9rem;
                }
                .section {
                    margin-bottom: 2rem;
                    page-break-inside: avoid;
                }
                .section-title {
                    background: #1e3a8a;
                    color: white;
                    padding: 0.5rem 1rem;
                    font-size: 1.1rem;
                    margin-bottom: 1rem;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-bottom: 1rem;
                }
                .info-item {
                    padding: 0.75rem;
                    background: #f8fafc;
                    border-left: 3px solid #3b82f6;
                }
                .info-label {
                    font-size: 0.85rem;
                    color: #64748b;
                    margin-bottom: 0.25rem;
                }
                .info-value {
                    font-weight: 600;
                    color: #1e293b;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 1rem;
                }
                th, td {
                    padding: 0.75rem;
                    text-align: left;
                    border: 1px solid #e2e8f0;
                }
                th {
                    background: #f1f5f9;
                    font-weight: 600;
                    color: #1e293b;
                }
                tr:nth-child(even) {
                    background: #f8fafc;
                }
                .badge {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    border-radius: 12px;
                    font-size: 0.85rem;
                    font-weight: 600;
                }
                .badge-success { background: #dcfce7; color: #16a34a; }
                .badge-danger { background: #fee2e2; color: #dc2626; }
                .badge-warning { background: #fef3c7; color: #f59e0b; }
                .footer {
                    margin-top: 3rem;
                    padding-top: 1rem;
                    border-top: 2px solid #e2e8f0;
                    text-align: center;
                    color: #64748b;
                    font-size: 0.85rem;
                }
                @media print {
                    body { padding: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${schoolInfo.name}</h1>
                <p>${schoolInfo.address} | ${schoolInfo.phone} | ${schoolInfo.email}</p>
                <h2 style="margin-top: 1rem; color: #1e3a8a;">Student Profile Report</h2>
            </div>

            <div class="section">
                <div class="section-title">Personal Information</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Student ID</div>
                        <div class="info-value">${student.id}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Full Name</div>
                        <div class="info-value">${student.name}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Grade/Class</div>
                        <div class="info-value">${student.grade}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Status</div>
                        <div class="info-value">
                            <span class="badge ${student.status === 'Active' ? 'badge-success' : 'badge-warning'}">${student.status}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Phone Number</div>
                        <div class="info-value">${student.phone || 'N/A'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Parent/Guardian</div>
                        <div class="info-value">${student.parent || 'N/A'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Date Joined</div>
                        <div class="info-value">${student.dateJoined || 'N/A'}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">School Fees</div>
                        <div class="info-value">$${student.schoolFees || 'N/A'}</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">Exam Results (${studentResults.length} Total)</div>
                ${studentResults.length > 0 ? `
                    <table>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Score</th>
                                <th>Grade</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${studentResults.map(res => `
                                <tr>
                                    <td>${res.subject}</td>
                                    <td><strong>${res.score}%</strong></td>
                                    <td>${res.status}</td>
                                    <td><span class="badge ${res.score >= 50 ? 'badge-success' : 'badge-danger'}">${res.score >= 50 ? 'Pass' : 'Fail'}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                ` : '<p style="text-align: center; color: #64748b; padding: 2rem;">No exam results recorded.</p>'}
            </div>

            <div class="section">
                <div class="section-title">Fee Payment History</div>
                <div class="info-grid" style="margin-bottom: 1rem;">
                    <div class="info-item">
                        <div class="info-label">Total Paid</div>
                        <div class="info-value" style="color: #16a34a;">$${totalPaid}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Total Pending</div>
                        <div class="info-value" style="color: #f59e0b;">$${totalPending}</div>
                    </div>
                </div>
                ${studentFees.length > 0 ? `
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${studentFees.map(fee => `
                                <tr>
                                    <td>${fee.date}</td>
                                    <td>${fee.amount}</td>
                                    <td><span class="badge ${fee.status === 'Paid' ? 'badge-success' : 'badge-warning'}">${fee.status}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                ` : '<p style="text-align: center; color: #64748b; padding: 2rem;">No fee records found.</p>'}
            </div>

            <div class="footer">
                <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                <p style="margin-top: 0.5rem;">© ${new Date().getFullYear()} ${schoolInfo.name}. All rights reserved.</p>
            </div>

            <div class="no-print" style="text-align: center; margin-top: 2rem;">
                <button onclick="window.print()" style="background: #1e3a8a; color: white; padding: 0.75rem 2rem; border: none; border-radius: 6px; font-size: 1rem; cursor: pointer; margin-right: 0.5rem;">Print</button>
                <button onclick="window.close()" style="background: #64748b; color: white; padding: 0.75rem 2rem; border: none; border-radius: 6px; font-size: 1rem; cursor: pointer;">Close</button>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// School Profile & Admin Settings Functions
function getSchoolInfo() {
    const defaultInfo = {
        name: "Baidoa Primary & Secondary School",
        principal: "Principal Name",
        email: "info@baidoaschool.edu",
        phone: "+252 61 234 5678",
        address: "Baidoa, Bay Region, Somalia"
    };
    const stored = localStorage.getItem('schoolInfo');
    return stored ? JSON.parse(stored) : defaultInfo;
}

// Role-Based User Management
function getUsers() {
    return appUsers;
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

function getAdminInfo() {
    const users = getUsers();
    return users.find(u => u.role === 'Admin') || users[0];
}

function handleSchoolProfileUpdate(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const logoFile = formData.get('school_logo');

    const saveSchoolInfo = (logoUrl) => {
        const schoolInfo = {
            name: formData.get('school_name'),
            principal: formData.get('principal_name'),
            email: formData.get('school_email'),
            phone: formData.get('school_phone'),
            address: formData.get('school_address'),
            logo: logoUrl || getSchoolInfo().logo || null
        };

        localStorage.setItem('schoolInfo', JSON.stringify(schoolInfo));

        // Update sidebar school name
        const logoSection = document.querySelector('.logo-section h1');
        if (logoSection) {
            logoSection.innerHTML = schoolInfo.name.includes('&')
                ? schoolInfo.name.replace('&', '&<br>')
                : schoolInfo.name;
        }

        // Update sidebar logo
        const logoImg = document.querySelector('.logo-section img');
        if (logoImg && schoolInfo.logo) {
            logoImg.src = schoolInfo.logo;
        } else if (logoImg) { // If no logo, ensure img src is cleared or hidden
            logoImg.src = '';
            // Optionally hide it if no logo
            // logoImg.style.display = 'none'; 
        }

        alert('School profile updated successfully!');
        navigateTo('settings');
    };

    // Handle logo upload
    if (logoFile && logoFile.size > 0) {
        const reader = new FileReader();
        reader.onload = function (event) {
            saveSchoolInfo(event.target.result);
        };
        reader.readAsDataURL(logoFile);
    } else {
        saveSchoolInfo(null);
    }
}

function deleteUser(username) {
    if (username === getCurrentUser().username) return alert("You cannot delete your own active account!");
    if (!confirm(`Are you sure you want to delete user: ${username}?`)) return;

    appUsers = appUsers.filter(u => u.username !== username);
    saveData();
    navigateTo('settings');
}

function showAddUserForm(username = null) {
    const user = username ? appUsers.find(u => u.username === username) : null;

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:10000; display:flex; align-items:center; justify-content:center;";

    modal.innerHTML = `
        <div class="card" style="width:100%; max-width:500px; margin:20px;">
            <h3>${user ? 'Edit User' : 'Add New System User'}</h3>
            <form id="user-manage-form">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control" name="name" value="${user ? user.name : ''}" required>
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" name="username" value="${user ? user.username : ''}" required ${user ? 'readonly' : ''}>
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" class="form-control" name="email" value="${user ? user.email : ''}" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="text" class="form-control" name="password" value="${user ? user.password : '123'}" required>
                </div>
                <div class="form-group">
                    <label>System Role</label>
                    <select class="form-control" name="role" required>
                        <option value="Admin" ${user && user.role === 'Admin' ? 'selected' : ''}>Admin</option>
                        <option value="Teacher" ${user && user.role === 'Teacher' ? 'selected' : ''}>Teacher</option>
                        <option value="Student" ${user && user.role === 'Student' ? 'selected' : ''}>Student</option>
                        <option value="Parent" ${user && user.role === 'Parent' ? 'selected' : ''}>Parent</option>
                        <option value="Accountant" ${user && user.role === 'Accountant' ? 'selected' : ''}>Accountant</option>
                    </select>
                </div>
                <div style="display:flex; justify-content:flex-end; gap:1rem; margin-top:1.5rem;">
                    <button type="button" class="btn btn-outline" onclick="this.closest('.modal-backdrop').remove()">Cancel</button>
                    <button type="submit" class="btn btn-primary">${user ? 'Save Changes' : 'Create Account'}</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('user-manage-form').onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            name: formData.get('name'),
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            role: formData.get('role')
        };

        if (user) {
            const index = appUsers.findIndex(u => u.username === username);
            appUsers[index] = { ...appUsers[index], ...userData };
        } else {
            if (appUsers.some(u => u.username === userData.username)) return alert("Username already exists!");
            appUsers.push(userData);
        }

        saveData();
        modal.remove();
        navigateTo('settings');
        alert("System user credentials updated!");
    };
}

// Event Listeners
// Authentication Logic
// Role Permission Mapping
const rolePermissions = {
    Admin: ['dashboard', 'students', 'registration', 'teachers', 'attendance', 'fees', 'exams', 'reports', 'settings', 'notifications'],
    Teacher: ['dashboard', 'students', 'attendance', 'exams', 'reports', 'notifications', 'settings'],
    Student: ['dashboard', 'exams', 'fees', 'attendance', 'notifications', 'settings'],
    Parent: ['dashboard', 'students', 'exams', 'fees', 'attendance', 'notifications', 'settings'],
    Accountant: ['dashboard', 'fees', 'reports', 'notifications', 'settings']
};

function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginContainer = document.getElementById('login-container');
    const appMain = document.getElementById('app-main');
    const user = getCurrentUser();

    if (isLoggedIn === 'true' && user) {
        loginContainer.style.display = 'none';
        appMain.style.display = 'flex';

        // Update User Profile UI
        const sidebarAvatar = document.querySelector('.sidebar .avatar');
        const sidebarName = document.querySelector('.sidebar .name');
        const sidebarRole = document.querySelector('.sidebar .role');

        if (sidebarAvatar) sidebarAvatar.innerText = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
        if (sidebarName) sidebarName.innerText = user.name;
        if (sidebarRole) sidebarRole.innerText = user.role;

        // Filter Sidebar Links
        const permissions = rolePermissions[user.role] || [];
        document.querySelectorAll('.nav-item').forEach(link => {
            const target = link.dataset.target;
            if (permissions.includes(target)) {
                link.style.display = 'flex';
            } else {
                link.style.display = 'none';
            }
        });

        navigateTo('dashboard');
    } else {
        loginContainer.style.display = 'flex';
        appMain.style.display = 'none';

        // Reset Mobile App Layout on logout
        document.body.classList.remove('app-dark-layout');
        document.querySelector('.app-container').classList.remove('app-dark-layout');
        document.querySelector('.main-content').classList.remove('no-header');
        document.querySelector('.content-area').classList.remove('app-style');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    const users = getUsers();
    const user = users.find(u => u.username.toLowerCase() === username && u.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        checkAuth();
    } else {
        alert("Invalid credentials! Try: isse / 123, teacher / 123, student / 123, etc.");
    }
}

function provisionStudentAccounts() {
    let createdCount = 0;

    studentsData.forEach(student => {
        // Check if user already exists
        const exists = appUsers.find(u => u.studentId === student.id);

        if (!exists) {
            appUsers.push({
                username: student.id.toLowerCase(),
                password: "123",
                role: "Student",
                name: student.name,
                email: student.email || `${student.id.toLowerCase()}@baidoaschool.edu`,
                studentId: student.id
            });
            createdCount++;
        }
    });

    if (createdCount > 0) {
        saveData();
        alert(`Successfully generated ${createdCount} new student portal accounts!\n\nUsernames match Student IDs (e.g., sbt-001)\nDefault Password: 123`);
        navigateTo('settings');
    } else {
        alert("All existing students already have portal accounts.");
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    checkAuth();
}

// Event Listeners
document.getElementById('login-form').addEventListener('submit', handleLogin);

document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    if (window.innerWidth <= 768 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Handle icon clicks inside link
        const target = e.currentTarget.dataset.target;
        navigateTo(target);
    });
});

// Initial Load
checkAuth();
function generateIDCard(type, id) {
    let data = null;
    let themeColor = "#2c3e50";
    let lanyardColor = "#2c3e50";
    let roleTitle = "";
    let studentGradeNum = 0;

    if (type === 'student') {
        data = studentsData.find(s => s.id === id);
        roleTitle = "STUDENT";
        studentGradeNum = parseInt(data.grade.replace(/\D/g, '')) || 0;

        if (studentGradeNum >= 1 && studentGradeNum <= 4) {
            themeColor = "#27AE60"; // Fresh Green
            lanyardColor = "#27AE60";
        } else if (studentGradeNum >= 5 && studentGradeNum <= 8) {
            themeColor = "#1F4E79"; // Royal Blue
            lanyardColor = "#1F4E79";
        } else if (studentGradeNum >= 9 && studentGradeNum <= 12) {
            themeColor = "#800020"; // Deep Burgundy
            lanyardColor = "#800020";
        }
    } else {
        data = teachersData.find(t => t.id == id);
        themeColor = "#0B3C5D"; // Premium Navy
        lanyardColor = "#0B3C5D";
        roleTitle = "TEACHER";
        data = { ...data, id: `TCH-${data.id}`, grade: data.subject };
    }

    if (!data) return;

    const schoolInfo = getSchoolInfo();
    // Unique Serial Number Format: BPS-2026-XXXXX
    const serialNumber = `BPS-2026-${String(data.id).padStart(5, '0')}`;

    // QR codes encode the data for our internal system scan
    const qrData = JSON.stringify({ action: 'view_profile', role: roleTitle, id: data.id });
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    const barcodeUrl = `https://bwipjs-api.metafloor.com/?bcid=code128&text=${data.id}&scale=2&rotate=N&includetext=false`;
    const schoolLogo = schoolInfo.logo || 'https://via.placeholder.com/150?text=LOGO';

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>ID Card - ${data.name}</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
                
                * { box-sizing: border-box; }
                body { 
                    font-family: 'Outfit', sans-serif; 
                    display: flex; 
                    flex-direction: column;
                    align-items: center; 
                    justify-content: center;
                    min-height: 100vh; 
                    margin: 0; 
                    background: #f8fafc; 
                    padding: 40px;
                }

                .print-controls {
                    margin-bottom: 30px;
                    display: flex;
                    gap: 15px;
                }

                .card-set {
                    display: flex;
                    gap: 40px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .id-side {
                    width: 350px;
                    height: 540px;
                    background: white;
                    border-radius: 18px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                }

                /* FRONT SIDE SPECIFIC */
                .front {
                    background: white;
                }

                .lanyard-visual {
                    width: 100%;
                    height: 15px;
                    background: ${lanyardColor};
                    ${type === 'teacher' ? 'background: linear-gradient(90deg, #0B3C5D 0%, #D4AF37 50%, #0B3C5D 100%);' : ''}
                    position: absolute;
                    top: 0;
                    z-index: 10;
                }

                .vertical-stripe {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 12px;
                    height: 100%;
                    background: ${themeColor};
                    z-index: 5;
                }

                .holo-sticker {
                    position: absolute;
                    top: 25px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%);
                    border-radius: 50%;
                    opacity: 0.8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: inset 0 0 5px rgba(255,255,255,0.8);
                    z-index: 11;
                }

                .holo-sticker::after {
                    content: 'VALID';
                    font-size: 6px;
                    font-weight: 700;
                    color: white;
                    transform: rotate(-45deg);
                }

                .card-content {
                    margin-left: 12px;
                    padding: 25px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }

                .watermark {
                    position: absolute;
                    top: 55%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 200px;
                    opacity: 0.04;
                    pointer-events: none;
                }

                .card-header {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .school-name {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: ${themeColor};
                    margin: 0;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .motto {
                    font-size: 0.6rem;
                    color: #64748b;
                    font-style: italic;
                    margin-top: 2px;
                }

                .photo-frame {
                    width: 125px;
                    height: 125px;
                    margin: 0 auto 15px;
                    border: 3px solid ${themeColor};
                    ${type === 'teacher' ? 'border-color: #D4AF37;' : ''}
                    border-radius: 12px;
                    padding: 3px;
                    background: white;
                    position: relative;
                }

                .photo-frame img, .photo-placeholder {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    object-fit: cover;
                }

                .photo-placeholder {
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3rem;
                    color: ${themeColor};
                }

                .user-name {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 3px;
                    text-align: center;
                }

                .role-badge {
                    display: block;
                    width: fit-content;
                    margin: 0 auto 15px;
                    padding: 3px 15px;
                    border-radius: 20px;
                    background: ${themeColor};
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 700;
                    ${type === 'teacher' ? 'background: #0B3C5D; color: #D4AF37; border: 1px solid #D4AF37;' : ''}
                }

                .data-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .data-item label {
                    display: block;
                    font-size: 0.6rem;
                    color: #94a3b8;
                    text-transform: uppercase;
                    font-weight: 700;
                }

                .data-item span {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .card-footer {
                    margin-top: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .barcode-area p {
                    font-size: 0.55rem;
                    color: #94a3b8;
                    margin: 2px 0 0;
                    letter-spacing: 0.5px;
                }

                .barcode-img {
                    height: 25px;
                    width: 130px;
                }

                .qr-area img {
                    width: 65px;
                    height: 65px;
                    border: 1px solid #f1f5f9;
                    padding: 2px;
                    border-radius: 6px;
                }

                /* BACK SIDE SPECIFIC */
                .back {
                    background: #fcfcfc;
                    display: flex;
                    flex-direction: column;
                    padding: 25px;
                    text-align: left;
                }

                .back-header {
                    border-bottom: 1.5px solid ${themeColor};
                    padding-bottom: 10px;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .back-header img { width: 35px; }

                .rules-section h4 {
                    font-size: 0.75rem;
                    color: ${themeColor};
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }

                .rules-list {
                    font-size: 0.65rem;
                    color: #475569;
                    padding-left: 15px;
                    margin: 0 0 15px;
                    line-height: 1.5;
                }

                .back-info {
                    background: #f1f5f9;
                    padding: 12px;
                    border-radius: 10px;
                    margin-bottom: 15px;
                }

                .back-info-item {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.7rem;
                    margin-bottom: 5px;
                }

                .back-info-item label { color: #64748b; font-weight: 600; }
                .back-info-item span { color: #0f172a; font-weight: 700; }

                .signature-area {
                    margin-top: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .sign-box {
                    text-align: center;
                }

                .sign-box img {
                    height: 35px;
                    filter: grayscale(1);
                    opacity: 0.6;
                }

                .sign-box p {
                    font-size: 0.55rem;
                    color: #64748b;
                    font-weight: 700;
                    margin: 0;
                    border-top: 1px solid #cbd5e1;
                    padding-top: 2px;
                }

                .property-notice {
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    font-size: 0.5rem;
                    color: #94a3b8;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                @media print {
                    .print-controls, .property-notice { display: none; }
                    body { background: white; padding: 0; }
                    .card-set { gap: 10mm; page-break-inside: avoid; }
                    .id-side { border: 1px solid #ddd; box-shadow: none; float: none; }
                }

                .btn-print {
                    background: ${themeColor};
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 700;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }
            </style>
        </head>
        <body>
            <div class="print-controls">
                <button class="btn-print" onclick="window.print()">Print ID Card (Both Sides)</button>
                <button class="btn-print" style="background:#64748b;" onclick="window.close()">Close</button>
            </div>

            <div class="card-set">
                <!-- FRONT SIDE -->
                <div class="id-side front">
                    <div class="lanyard-visual"></div>
                    <div class="vertical-stripe"></div>
                    <div class="holo-sticker"></div>
                    
                    <div class="card-content">
                        <img class="watermark" src="${schoolLogo}">
                        
                        <div class="card-header">
                            <h2 class="school-name">${schoolInfo.name}</h2>
                            <p class="motto">"Knowledge is Power • Excellence for All"</p>
                        </div>

                        <div class="photo-section">
                            <div class="photo-frame">
                                ${data.image ? `<img src="${data.image}">` : `<div class="photo-placeholder">${data.name.charAt(0)}</div>`}
                            </div>
                        </div>

                        <div class="user-name">${data.name}</div>
                        <div class="role-badge">${roleTitle}</div>

                        <div class="data-grid">
                            <div class="data-item">
                                <label>Serial No</label>
                                <span>${serialNumber}</span>
                            </div>
                            <div class="data-item">
                                <label>${type === 'student' ? 'Grade' : 'Subject'}</label>
                                <span>${data.grade}</span>
                            </div>
                            <div class="data-item">
                                <label>Academic Session</label>
                                <span>2025-2026</span>
                            </div>
                            <div class="data-item">
                                <label>Expiry Date</label>
                                <span>Dec 2026</span>
                            </div>
                        </div>

                        <div class="card-footer">
                            <div class="barcode-area">
                                <img src="${barcodeUrl}" class="barcode-img">
                                <p>INTERNAL SYSTEM ID: ${data.id}</p>
                            </div>
                            <div class="qr-area">
                                <img src="${qrUrl}">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BACK SIDE -->
                <div class="id-side back">
                    <div class="back-header">
                        <img src="${schoolLogo}">
                        <div>
                            <h3 style="font-size: 0.8rem; margin:0; color:${themeColor};">B.P.S SCHOOL CARD</h3>
                        </div>
                    </div>

                    <div class="rules-section">
                        <h4>Responsibilities & Rules</h4>
                        <ul class="rules-list">
                            <li>Keep this card clearly visible on campus.</li>
                            <li>The card is non-transferable and must be returned on leaving.</li>
                            <li>Loss of card must be reported to the admin office immediately.</li>
                            <li>Misuse of card will lead to disciplinary action.</li>
                        </ul>
                    </div>

                    <div class="back-info">
                        <div class="back-info-item"><label>Blood Group</label><span>B+ POS</span></div>
                        <div class="back-info-item"><label>Bus Route</label><span>Route B-12</span></div>
                        <div class="back-info-item"><label>Emergency Contact</label><span>${schoolInfo.phone}</span></div>
                        <div class="back-info-item"><label>School Email</label><span>${schoolInfo.email}</span></div>
                    </div>

                    <div style="font-size: 0.55rem; color:#64748b; margin-top:10px;">
                        <label style="font-weight:700;">Address:</label><br>
                        ${schoolInfo.address}
                    </div>

                    <div class="signature-area">
                        <div class="sign-box">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Signature_of_Theodore_Roosevelt.svg" alt="Headmaster">
                            <p>Headmaster</p>
                        </div>
                        <div class="sign-box" style="margin-left:auto;">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stamp_of_a_company.svg" alt="Stamp" style="opacity:0.3; width:60px;">
                            <p>School Stamp</p>
                        </div>
                    </div>

                    <div class="property-notice">
                        Property of Baidoa School - Not Transferable
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}
