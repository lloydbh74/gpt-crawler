import { Config } from "./src/config";

//export const defaultConfig: Config = {
//  url: "https://docs.nocode-x.com/",
//  match: "https://docs.nocode-x.com/**",
//  maxPagesToCrawl: 50,
//  outputFileName: "NoCodeX_Docs.json",
//  maxTokens: 2000000,
//};

export const defaultConfig: Config = {
  url: "https://docs.nocode-x.com/",
  match: "https://docs.nocode-x.com/**",
  maxPagesToCrawl: 2000,  // Increased to ensure we get all pages
  outputFileName: "NoCodeX_Docs.json",
  maxTokens: 2000000,
  selector: "main", // Target the main content area (will need to verify this)
  resourceExclusions: ["png", "jpg", "jpeg", "gif", "svg", "css", "js", "ico", "woff", "woff2"], // Exclude unnecessary resources
};