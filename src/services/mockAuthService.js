// src/services/mockAuthService.js

// Function to get stored users from localStorage
const getStoredUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

// Function to save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// Function to find a user by email
const findUserByEmail = (email) => {
  const users = getStoredUsers();
  return users.find(user => user.email === email);
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByEmail(email);
      if (user && user.password === password) {
        resolve({ user: { email: user.email } });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};

export const register = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject(new Error('Invalid email or password'));
        return;
      }
      
      const existingUser = findUserByEmail(email);
      if (existingUser) {
        reject(new Error('Email already in use'));
        return;
      }

      const users = getStoredUsers();
      users.push({ email, password });
      saveUsers(users);
      resolve({ user: { email } });
    }, 1000);
  });
};

export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
