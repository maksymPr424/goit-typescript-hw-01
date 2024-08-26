export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type RoleDesc = Record<UserRole, string>;

const RoleDescription: RoleDesc = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
