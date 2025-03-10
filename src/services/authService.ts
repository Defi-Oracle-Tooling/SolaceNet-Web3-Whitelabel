import { startAuthentication, startRegistration } from '@webauthn/client';

// Register a new user with WebAuthn
export const registerUser = async (username: string) => {
  try {
    // Get registration options from the server
    const response = await fetch('/api/auth/register-options', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to get registration options');
    }
    
    const options = await response.json();
    
    // Start the registration process
    const credential = await startRegistration(options);
    
    // Verify the registration with the server
    const verificationResponse = await fetch('/api/auth/register-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credential),
    });
    
    if (!verificationResponse.ok) {
      throw new Error('Failed to verify registration');
    }
    
    return await verificationResponse.json();
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

// Authenticate a user with WebAuthn
export const authenticateUser = async (username: string) => {
  try {
    // Get authentication options from the server
    const response = await fetch('/api/auth/login-options', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to get authentication options');
    }
    
    const options = await response.json();
    
    // Start the authentication process
    const credential = await startAuthentication(options);
    
    // Verify the authentication with the server
    const verificationResponse = await fetch('/api/auth/login-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credential),
    });
    
    if (!verificationResponse.ok) {
      throw new Error('Failed to verify authentication');
    }
    
    return await verificationResponse.json();
  } catch (error) {
    console.error('Authentication failed:', error);
    throw error;
  }
};

// Logout the current user
export const logoutUser = async () => {
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });
    
    if (!response.ok) {
      throw new Error('Failed to logout');
    }
    
    return true;
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};
