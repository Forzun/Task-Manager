
const employees = [
    {
        id: 1,
        name: "John Doe",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Prepare Report",
                description: "Complete the financial report for Q3.",
                date: "2024-11-01",
                category: "Finance",
                active: true,
                newTask: true,
                complete: false,
                failed: false
            },
            {
                title: "Client Follow-up",
                description: "Reach out to clients regarding Q4 updates.",
                date: "2024-11-12",
                category: "Customer Service",
                active: true,
                newTask: true,
                complete: false,
                failed: false
            }
        ],
        taskNumbers: {
            active: 2,
            newTask: 2,
            complete: 0,
            failed: 0
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Data Backup",
                description: "Ensure all files are backed up.",
                date: "2024-11-04",
                category: "IT",
                active: false,
                newTask: true,
                complete: true,
                failed: false
            },
            {
                title: "Inventory Update",
                description: "Update inventory records after Q3.",
                date: "2024-11-16",
                category: "Inventory",
                active: true,
                newTask: false,
                complete: false,
                failed: false
            }
        ],
        taskNumbers: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 0
        }
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Inventory Check",
                description: "Perform a stock check for current supplies.",
                date: "2024-11-03",
                category: "Inventory",
                active: true,
                newTask: false,
                complete: false,
                failed: false
            },
            {
                title: "Report Formatting",
                description: "Format report as per guidelines.",
                date: "2024-11-17",
                category: "Reporting",
                active: false,
                newTask: true,
                complete: false,
                failed: false
            }
        ],
        taskNumbers: {
            active: 1,
            newTask: 1,
            complete: 0,
            failed: 0
        }
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "Social Media Update",
                description: "Post new updates on company social channels.",
                date: "2024-11-05",
                category: "Marketing",
                active: false,
                newTask: true,
                complete: true,
                failed: false
            },
            {
                title: "Client Outreach",
                description: "Contact clients about new offers.",
                date: "2024-11-18",
                category: "Sales",
                active: true,
                newTask: false,
                complete: false,
                failed: false
            }
        ],
        taskNumbers: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 0
        }
    },
    {
        id: 5,
        name: "Charlie Davis",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Website Update",
                description: "Update the company website with the latest info.",
                date: "2024-11-06",
                category: "IT",
                active: true,
                newTask: false,
                complete: false,
                failed: false
            },
            {
                title: "Vendor Check-in",
                description: "Confirm delivery timelines with vendors.",
                date: "2024-11-19",
                category: "Procurement",
                active: false,
                newTask: true,
                complete: false,
                failed: false
            }
        ],
        taskNumbers: {
            active: 1,
            newTask: 1,
            complete: 0,
            failed: 0
        }
    }
];


const admin = [
    {
        "id": 1, 
        "email":"admin@me.com", 
        "password":"123",
    }
]

export const setLocalStorage = () => { 
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
 
    return { employees , admin};
}


