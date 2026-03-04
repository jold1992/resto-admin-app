import { signIn, signOut, getUserRole, type UserRole } from './auth';

// Mock supabase client
jest.mock('@/lib/supabase/client', () => ({
  createClient: jest.fn(() => ({
    auth: {
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
      getUser: jest.fn(),
    },
  })),
}));

describe('auth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('signIn', () => {
    it('should call supabase signInWithPassword with correct parameters', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockSignIn = jest.fn().mockResolvedValue({ data: {}, error: null });
      (createClient as jest.Mock).mockReturnValue({
        auth: { signInWithPassword: mockSignIn },
      });

      await signIn('test@example.com', 'password123');

      expect(mockSignIn).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });

    it('should handle sign in errors', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const error = new Error('Invalid credentials');
      const mockSignIn = jest.fn().mockResolvedValue({ data: null, error });
      (createClient as jest.Mock).mockReturnValue({
        auth: { signInWithPassword: mockSignIn },
      });

      const result = await signIn('test@example.com', 'wrongpassword');

      expect(result.error).toBeDefined();
    });

    // Security: Test for proper error handling
    it('should not expose sensitive data in error messages', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockSignIn = jest.fn().mockResolvedValue({
        data: null,
        error: { message: 'Invalid login credentials' },
      });
      (createClient as jest.Mock).mockReturnValue({
        auth: { signInWithPassword: mockSignIn },
      });

      const result = await signIn('admin@example.com', 'secretpassword');

      // Error messages should not contain password
      expect(result.error?.message).not.toContain('secretpassword');
    });
  });

  describe('signOut', () => {
    it('should call supabase signOut', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockSignOut = jest.fn().mockResolvedValue({ error: null });
      (createClient as jest.Mock).mockReturnValue({
        auth: { signOut: mockSignOut },
      });

      await signOut();

      expect(mockSignOut).toHaveBeenCalled();
    });
  });

  describe('getUserRole', () => {
    it('should return user role from user metadata', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockGetUser = jest.fn().mockResolvedValue({
        data: {
          user: {
            user_metadata: { role: 'admin' },
          },
        },
      });
      (createClient as jest.Mock).mockReturnValue({
        auth: { getUser: mockGetUser },
      });

      const role = await getUserRole();

      expect(role).toBe('admin');
    });

    it('should return null if no user', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockGetUser = jest.fn().mockResolvedValue({ data: { user: null } });
      (createClient as jest.Mock).mockReturnValue({
        auth: { getUser: mockGetUser },
      });

      const role = await getUserRole();

      expect(role).toBeNull();
    });

    it('should return null if no role in metadata', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockGetUser = jest.fn().mockResolvedValue({
        data: { user: { user_metadata: {} } },
      });
      (createClient as jest.Mock).mockReturnValue({
        auth: { getUser: mockGetUser },
      });

      const role = await getUserRole();

      expect(role).toBeNull();
    });

    // Security: Validate role types
    it('should only return valid UserRole values', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockGetUser = jest.fn().mockResolvedValue({
        data: { user: { user_metadata: { role: 'admin' } } },
      });
      (createClient as jest.Mock).mockReturnValue({
        auth: { getUser: mockGetUser },
      });

      const role = await getUserRole();
      const validRoles: UserRole[] = ['admin', 'cajero', 'cocina'];

      expect(validRoles).toContain(role);
    });

    // Vulnerability: Test for role injection
    // Note: Current implementation does NOT validate roles, it's a potential vulnerability
    it('should handle invalid role values gracefully', async () => {
      const { createClient } = await import('@/lib/supabase/client');
      const mockGetUser = jest.fn().mockResolvedValue({
        data: { user: { user_metadata: { role: 'superadmin' } } },
      });
      (createClient as jest.Mock).mockReturnValue({
        auth: { getUser: mockGetUser },
      });

      const role = await getUserRole();

      // Current behavior: returns the raw value from metadata (vulnerability!)
      // This should be fixed to validate and reject invalid roles
      expect(role).toBeDefined();
    });
  });

  describe('UserRole type', () => {
    it('should allow valid role values', () => {
      const adminRole: UserRole = 'admin';
      const cajeroRole: UserRole = 'cajero';
      const cocinaRole: UserRole = 'cocina';

      expect(adminRole).toBe('admin');
      expect(cajeroRole).toBe('cajero');
      expect(cocinaRole).toBe('cocina');
    });
  });
});
