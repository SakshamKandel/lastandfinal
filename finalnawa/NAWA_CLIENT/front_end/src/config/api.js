/**
 * API Configuration
 * This file centralizes the API configuration to easily switch between development and production environments
 */

// Get the API base URL from environment variables, with a fallback for local development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://nawa-backend.onrender.com';

// Default request configuration
const DEFAULT_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  }
};

export { API_BASE_URL, DEFAULT_CONFIG };

/**
 * Builds the full API URL for a given endpoint
 * @param {string} endpoint - The API endpoint (e.g., "/getTeachers")
 * @returns {string} The full API URL
 */
export const getApiUrl = (endpoint) => {
  // Remove trailing slash from base URL and leading slash from endpoint
  const base = API_BASE_URL.replace(/\/+$/, '');
  const path = endpoint.replace(/^\/+/, '');
  return `${base}/${path}`;
};

/**
 * Environment information
 */
export const isProduction = import.meta.env.VITE_APP_ENV === 'production';
export const isDevelopment = !isProduction;

/**
 * School information
 */
export const SCHOOL_NAME = import.meta.env.VITE_APP_NAME || 'Nawa Tara English School';

export default {
  API_BASE_URL,
  DEFAULT_CONFIG,
  getApiUrl,
  isProduction,
  isDevelopment,
  SCHOOL_NAME
}; 