import { useAuthStore } from '../store/authStore';

// Simuler une base de données d'utilisateurs
let users: any[] = [];

export interface SignUpData {
  email: string;
  password: string;
  company: string;
}

export interface LoginData {
  email: string;
  password: string;
}

const generateToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const authService = {
  async signUp(data: SignUpData) {
    try {
      // Vérifier si l'email existe déjà
      if (users.find(user => user.email === data.email)) {
        return { 
          success: false, 
          error: 'Cet email est déjà utilisé' 
        };
      }

      // Créer un nouvel utilisateur en mode prévisualisation
      const user = {
        id: Date.now().toString(),
        email: data.email,
        password: data.password,
        company: data.company,
        isPremium: false,
        isPreview: true,
        createdAt: new Date()
      };

      // Ajouter l'utilisateur à notre "base de données"
      users.push(user);

      // Générer un token
      const token = generateToken();

      // Mettre à jour le store
      useAuthStore.getState().setToken(token);
      useAuthStore.getState().setUser({
        id: user.id,
        email: user.email,
        company: user.company,
        isPremium: user.isPremium,
        isPreview: user.isPreview
      });

      return { success: true };
    } catch (error) {
      console.error('SignUp error:', error);
      return {
        success: false,
        error: 'Une erreur est survenue lors de la création du compte'
      };
    }
  },

  async login(data: LoginData) {
    try {
      // Rechercher l'utilisateur
      const user = users.find(u => u.email === data.email && u.password === data.password);

      if (!user) {
        return { 
          success: false, 
          error: 'Email ou mot de passe incorrect' 
        };
      }

      // Générer un token
      const token = generateToken();

      // Mettre à jour le store
      useAuthStore.getState().setToken(token);
      useAuthStore.getState().setUser({
        id: user.id,
        email: user.email,
        company: user.company,
        isPremium: user.isPremium,
        isPreview: user.isPreview
      });

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: 'Une erreur est survenue lors de la connexion'
      };
    }
  },

  logout() {
    useAuthStore.getState().logout();
  }
};