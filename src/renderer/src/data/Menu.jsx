

const Menu = [
  {
    "label": "Home",
    "link": "",
    "icon": "ri-home-8-line"
  },
  {
    "label": "Tank",
    "link": "dashboard/tank",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Dip Stock",
    "link": "dashboard/dipStock",
    "icon": "ri-pie-chart-2-line"
  },{
    "label": "Add Employee",
    "link": "dashboard/addEmployee",
    "icon": "ri-pie-chart-2-line"
  },{
    "label": "Add Customer",
    "link": "dashboard/addCustomer",
    "icon": "ri-pie-chart-2-line"
  },{
    "label": "Add Sales",
    "link": "dashboard/addSales",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Category",
    "link": "dashboard/category",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Add Product",
    "link": "dashboard/addProduct",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Add Inventory",
    "link": "dashboard/addinventory",
    "icon": "ri-pie-chart-2-line"
  },
];
const dashboardMenu = [
  {
    "label": "Finance Monitoring",
    "link": "/dashboard/finance",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Events Management",
    "link": "/dashboard/events",
    "icon": "ri-calendar-todo-line"
  },
  {
    "label": "Website Analytics",
    "link": "/dashboard/analytics",
    "icon": "ri-bar-chart-2-line"
  },

  {
    "label": "Product Management",
    "link": "/dashboard/product",
    "icon": "ri-suitcase-2-line"
  }
];

const applicationsMenu = [
  {
    "label": "File Manager",
    "link": "/apps/file-manager",
    "icon": "ri-folder-2-line"
  },
  {
    "label": "Email",
    "link": "/apps/email",
    "icon": "ri-mail-send-line"
  },
  {
    "label": "Calendar",
    "link": "/apps/calendar",
    "icon": "ri-calendar-line"
  },
  {
    "label": "Chat",
    "link": "/apps/chat",
    "icon": "ri-question-answer-line"
  },
  {
    "label": "Contacts",
    "link": "/apps/contacts",
    "icon": "ri-contacts-book-line"
  },
  {
    "label": "Task Manager",
    "link": "/apps/tasks",
    "icon": "ri-checkbox-multiple-line"
  },
  {
    "label": "Media Gallery",
    "icon": "ri-gallery-line",
    "submenu": [
      {
        "label": "Music Stream",
        "link": "/apps/gallery-music"
      },
      {
        "label": "Video Stream",
        "link": "/apps/gallery-video"
      }
    ]
  }
];

const pagesMenu = [
  {
    "label": "User Pages",
    "icon": "ri-account-circle-line",
    "submenu": [
      {
        "label": "User Profile",
        "link": "/pages/profile"
      },
      {
        "label": "People & Groups",
        "link": "/pages/people"
      },
      {
        "label": "Activity Log",
        "link": "/pages/activity"
      },
      {
        "label": "Events",
        "link": "/pages/events"
      },
      {
        "label": "Settings",
        "link": "/pages/settings"
      }
    ]
  },
  {
    "id": 27,
    "label": "Authentication",
    "icon": "ri-lock-2-line",
    "submenu": [
      {
        "label": "Sign In Basic",
        "link": "/pages/signin"
      },
      {
        "label": "Sign In Cover",
        "link": "/pages/signin2"
      },
      {
        "label": "Sign Up Basic",
        "link": "/pages/signup"
      },
      {
        "label": "Sign Up Cover",
        "link": "/pages/signup2"
      },
      {
        "label": "Verify Account",
        "link": "/pages/verify"
      },
      {
        "label": "Forgot Password",
        "link": "/pages/forgot"
      },
      {
        "label": "Lock Screen",
        "link": "/pages/lock"
      }
    ]
  },
  {
    "label": "Error Pages",
    "icon": "ri-error-warning-line",
    "submenu": [
      {
        "label": "Page Not Found",
        "link": "/pages/error-404"
      },
      {
        "label": "Internal Server Error",
        "link": "/pages/error-500"
      },
      {
        "label": "Service Unavailable",
        "link": "/pages/error-503"
      },
      {
        "label": "Forbidden",
        "link": "/pages/error-505"
      }
    ]
  },
  {
    "label": "Other Pages",
    "icon": "ri-file-text-line",
    "submenu": [
      {
        "label": "Pricing",
        "link": "/pages/pricing"
      },
      {
        "label": "FAQ",
        "link": "/pages/faq"
      }
    ]
  }
];



export {Menu, dashboardMenu, applicationsMenu, pagesMenu};