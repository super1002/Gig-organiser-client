const english = {
    nav: {
        org: "JobSprint",
        home: "Home",
        dashboard: "Dashboard",
        jobs: "Jobs",
        actions: "Actions",
        signup: "Sign Up",
        login: "Login",
        logout: "Logout",
    },
    home: {
        title: "Organise Your Job Search",
        subtitle: {
            one: "Looking for a job can be a daunting task, but with JobSprint, you can easily keep track of all your job applications and interviews in one place.",
            two: "Jot down notes and track the progress of each application, so you never lose sight of your job search. Say goodbye to cluttered notebooks and sticky notes, and <strong>hello to a sleek and organised job hunt!</strong>",
        },
    },
    dashboard: {
        intro:
            "<p>Welcome to your <strong>dashboard</strong>! Here you can find an <strong>overview of your job search progress.</strong></p>",
    },
    jobs: {
        intro: {
            one: "<p>In your job search, it's important to keep track of the positions you're applying for and the progress you're making with each one. Here you can add a job, including its title, description, priority, and status. The <strong>title</strong> is the name of the position you're applying for, the <strong>description</strong> provides more details about the job, the <strong>priority</strong> indicates how important it is to you, and the <strong>status</strong> shows where you are in the application process.</p>",
            two: "<p>Jobs also have <strong>actions</strong>, which are the specific steps you need to take in order to move forward with the application. These actions can be added on the <strong>actions page</strong>, and might include things like scheduling an interview or completing a technical test.</p><p>You can <strong>sort the columns</strong> in the jobs table by clicking on the table headers. You can also <strong>use markdown to format the text</strong> in the job description. Simply enclose the text you want to format in the appropriate markdown syntax. For example, **bold text** displays as <strong>bold text</strong>.</p>",
        },
        add: "Add Job",
        update: "Update Job",
        updateAlt: "Update",
        empty: {
            title: "No jobs yet.",
            text: "Start adding jobs!",
        },
        form: {
            label: {
                title: "Job Title",
                organisation: "Organisation",
                description: "Enter a job description, or any notes you want!",
                priority:
                    "Set the priority. On a scale of 1-10 (1 being low), how important is this opportunity?",
                status: "What is the status of the application?",
            },
        },
    },
    actions: {
        intro:
            "<p>Jobs have <strong>actions</strong>, which are the specific steps you need to take in order to move forward with the application. These actions can be added here, and might include things like scheduling an interview or completing a technical test.</p><p>You can <strong>sort the columns</strong> in the actions table by clicking on the table headers. You can also <strong>use markdown to format the text</strong> in the action description. Simply enclose the text you want to format in the appropriate markdown syntax. For example, **bold text** displays as <strong>bold text</strong>.</p>",
        add: "Create Action",
        update: "Update Action",
        updateAlt: "Update",
        error: {
            title: "Error",
            text: "You are logged out. Please login to see your actions.",
        },
        empty: {
            title: "No actions yet.",
            text: "Start adding actions!",
        },
        form: {
            label: {
                name: "Action Name",
                description: "Description",
                completedBy: "When should this action be completed by?",
                job: "What job is this action for?",
                completed: "Action completed?",
            },
        },
    },
    account: {
        title: "Welcome to your account page!",
        subtitle: "Account Details",
        summary: {
            one: "Here you can see your email address and name, as well as delete your account.",
            two: "If you're feeling like it's time to say goodbye, you can delete your account from this page. Please note that this action cannot be undone, so make sure you really want to do it before hitting that big red button. Once your account is deleted, all of your data will be permanently removed from our systems.",
            three:
                "We hope you enjoy using the application. Thanks for being a part of our community!",
        },
        name: "Name",
        email: "Email",
        delete: "Delete Account",
    },
    signup: {
        title: "Welcome to JobSprint!",
        intro: {
            one: "<p>To get started, all you need to do is <strong>sign up for your account.</strong></p>",
            two: "<p><strong>No need to worry about email verification</strong> - just enter your desired username and password, and you'll be on your way to keeping track of your job search like a pro.</p>",
            three:
                "<p>Once you're signed up, you'll have access to all the features that make JobSprint the best way to organise your job search.</p>",
            four: "<p>So go ahead, sign up and <strong>get organised</strong>.</p>",
        },
        success: {
            title: "You're Set",
            intro: {
                one: "Welcome to JobSprint! You're all set and ready to start organising your job search like a pro.",
                two: "Log in to your account and start taking control of your job search. With JobSprint, landing your next job opportunity is just a few clicks away!",
            },
            login: "Login to your account",
        },
        submit: "Sign Up",
    },
    login: {
        title: "Login",
        welcome: {
            title: "Welcome back",
            text: "to manage your jobs and actions.",
        },
        login: "Login",
    },
    loading: {
        title: "Loading...",
        text: "just a second...",
    },
    error: {
        title: "Error",
        tryagain: "Try Again",
    },
    notfound: {
        title: "404 - Page Not Found",
        text: "Sorry, the page you are looking for does not exist.",
    },
    welcome: {
        dashboard: "Go to dashboard",
    },
    upcomingActions: {
        title: "Upcoming Actions",
        empty: {
            title: "No Upcoming Actions",
            text: "Add some actions on the ",
            linkText: "actions page",
        },
        viewAll: "View All",
    },
    jobStatusChart: {
        title: "Applications by Status",
        text: "There are no jobs. Start adding jobs on the ",
        linkText: "jobs page.",
    },
    applicationsThisMonth: {
        title: "Applications This Month",
    },
    topJobs: {
        title: "Top Jobs",
        subtitle: "Jobs with high priority",
        empty: "No high priority jobs found.",
        viewAll: "View All",
    },
    pagination: {
        previous: "Previous",
        next: "Next",
        page: "Page ",
        goToPage: "Go to page: ",
        show: "Show",
    },
}

export default english