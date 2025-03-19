import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount :: error", error);
      //   throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite service :: login :: error", error);
      //   throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      if (user) {
        return user;
      } else {
        console.log("User not logged in, redirecting...");
      }
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return null; // Return null instead of undefined
    }
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logOut :: error", error);
    }
  }
}

const authservice = new AuthService();

export default authservice;
