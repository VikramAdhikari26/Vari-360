export type UserProfile = {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  avatar?: string;
  createdAt: string;
};

export type RegisterInput = {
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  avatar?: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

type StoredAccount = UserProfile;

const ACCOUNTS_KEY = "namma_vari_360_accounts";
const SESSION_KEY = "namma_vari_360_session";

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getInitials(fullName: string) {
  const names = (fullName || "").trim().split(/\s+/).filter(Boolean);
  if (names.length === 0) {
    return "NV";
  }

  if (names.length === 1) {
    return names[0].slice(0, 2).toUpperCase();
  }

  return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
}

export function getFirstName(fullName: string) {
  return (fullName || "").trim().split(/\s+/).filter(Boolean)[0] || "Citizen";
}

export function getCurrentUser(): UserProfile | null {
  const session = readStorage<{ user?: UserProfile } | null>(SESSION_KEY, null);
  return session?.user ?? null;
}

export function setCurrentUser(user: UserProfile) {
  writeStorage(SESSION_KEY, { user, token: `nv360_${Date.now()}` });
}

export function clearCurrentUser() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(SESSION_KEY);
  }
}

function getStoredAccounts(): StoredAccount[] {
  return readStorage<StoredAccount[]>(ACCOUNTS_KEY, []);
}

function saveStoredAccounts(accounts: StoredAccount[]) {
  writeStorage(ACCOUNTS_KEY, accounts);
}

function sanitizeUser(user: StoredAccount): UserProfile {
  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    mobile: user.mobile,
    avatar: user.avatar,
    createdAt: user.createdAt,
  };
}

export async function registerUser(input: RegisterInput) {
  const trimmedName = input.fullName.trim();
  const email = input.email.trim().toLowerCase();
  const mobile = input.mobile.trim();

  if (!trimmedName || !email || !mobile || !input.password.trim()) {
    throw new Error("Please complete all required fields.");
  }

  const accounts = getStoredAccounts();
  const duplicate = accounts.some((account) => account.email.toLowerCase() === email);
  if (duplicate) {
    throw new Error("An account with this email already exists.");
  }

  const newUser: StoredAccount = {
    id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}`,
    fullName: trimmedName,
    email,
    mobile,
    avatar: input.avatar,
    createdAt: new Date().toISOString(),
  };

  const nextAccounts = [...accounts, newUser];
  saveStoredAccounts(nextAccounts);

  const safeUser = sanitizeUser(newUser);
  setCurrentUser(safeUser);

  return { user: safeUser };
}

export async function loginUser(input: LoginInput) {
  const email = input.email.trim().toLowerCase();
  const accounts = getStoredAccounts();
  const account = accounts.find((item) => item.email.toLowerCase() === email);

  if (!account || !input.password.trim()) {
    throw new Error("Invalid email or password.");
  }

  const safeUser = sanitizeUser(account);
  setCurrentUser(safeUser);

  return { user: safeUser };
}

export function logoutUser() {
  clearCurrentUser();
}

export function updateUserProfile(input: Partial<UserProfile> & { id: string }) {
  const accounts = getStoredAccounts();
  const index = accounts.findIndex((account) => account.id === input.id);

  if (index === -1) {
    throw new Error("User account not found.");
  }

  const updatedAccount = {
    ...accounts[index],
    fullName: input.fullName?.trim() || accounts[index].fullName,
    mobile: input.mobile?.trim() || accounts[index].mobile,
    avatar: input.avatar ?? accounts[index].avatar,
  };

  accounts[index] = updatedAccount;
  saveStoredAccounts(accounts);

  const safeUser = sanitizeUser(updatedAccount);
  setCurrentUser(safeUser);

  return safeUser;
}
