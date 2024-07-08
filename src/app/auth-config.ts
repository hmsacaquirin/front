import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const b2cPolicies = {
     names: {
         signUpSignIn: "B2C_1_susi"
     },
     authorities: {
         signUpSignIn: {
             authority: "https://test123azurea.b2clogin.com/test123azurea.onmicrosoft.com/B2C_1_susi",
         }
     },
     authorityDomain: "test123azurea.b2clogin.com"
 };
 
 
export const msalConfig: Configuration = {
     auth: {
         clientId: 'e5542a31-58ba-4703-925b-552169196df1',
         authority: b2cPolicies.authorities.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/', 
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE, 
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = {
  api: {
    endpoint: "http://localhost:3000/weatherforecast",
    scopes: ["https://test123azurea.onmicrosoft.com/testangular/tasks.read"],
    failingEndpoint: "http://localhost:3000/weatherforecast/fail"
  },
}
export const loginRequest = {
  scopes: []
};