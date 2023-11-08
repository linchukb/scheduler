// src/utils/authConfig.js
export const msalConfig = {
    auth: {
        clientId: 'd22ebb32-6e2b-44d8-bbc9-b8f6f374583d',  // Application (client) ID from Azure AD
        authority: 'https://login.microsoftonline.com/13fac4bb-92d4-4f8f-9eb1-51891384fc49',  // Directory (tenant) ID from Azure AD
        redirectUri: 'http://localhost:3000',  // Or wherever your app is being hosted
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

export const loginRequest = {
    scopes: ["openid", "profile", "User.Read", "Calendars.ReadWrite"]
};
