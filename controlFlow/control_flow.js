
let userRole = "admin";
let accessLevel;

if (userRole = "admin") {
    accessLevel = "Full access granted!";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted!";
} else {
    accessLevel = "No access granted!";
}

console.log ("Access Lebel: ", accessLevel);
console.log("--------------------------");

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome Admin!";
    } else {
        userMessage = "Please log in to access the system.";
    }
}

console.log ("User Message: ", userMessage);
console.log("--------------------------");

let userType  = "subscriber";
let usercategory;

switch (userType) {
    case "admin":
        usercategory = "Administrator";
        break;
    case "manager":
        usercategory = "Manager";
        break;
    case "subscriber":
        usercategory = "Subscriber";
        break;
    default:
        usercategory = "unknown";
}

console.log ("User Type: ", userType);
console.log ("----------------------------");

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log ("Is Authentivated? ", isAuthenticated);
console.log ("----------------------------");

let personRole = "Enrolled Member"; // Change this to test: "Employee", "Subscriber", "Non-Subscriber"

let message;

if (personRole === "Employee") {
    message = "You are authorized to have access to Dietary Services.";
} else if (personRole === "Enrolled Member") {
    message = "You are authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
} else if (personRole === "Subscriber") {
    message = "You are authorized to have partial access to Dietary Services only.";
} else if (personRole === "Non-Subscriber") {
    message = "You need to enroll or at least subscribe first to avail this facility.";
} else {
    message = "Role not recognized.";
}

console.log("Person role: ", message);
console.log ("----------------------------");