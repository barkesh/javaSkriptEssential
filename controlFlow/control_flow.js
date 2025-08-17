
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