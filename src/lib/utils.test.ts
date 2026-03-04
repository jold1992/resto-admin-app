import { cn, cuid } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      const result = cn('foo', 'bar');
      expect(result).toBe('foo bar');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const result = cn('base', isActive && 'active');
      expect(result).toBe('base active');
    });

    it('should handle falsey values gracefully', () => {
      const result = cn('foo', false && 'bar', null, undefined, 0 && 'baz');
      expect(result).toBe('foo');
    });

    it('should handle empty strings', () => {
      const result = cn('foo', '');
      expect(result).toBe('foo');
    });

    it('should handle arrays', () => {
      const result = cn(['foo', 'bar']);
      expect(result).toBe('foo bar');
    });

    // Security test: ensure no XSS through class names
    it('should not sanitize class names (potential XSS vector if used unsafely)', () => {
      const maliciousInput = 'foo"><script>alert(1)</script>';
      const result = cn(maliciousInput);
      // Note: In real usage, className should be sanitized before passing to cn
      // This test documents the current behavior
      expect(result).toContain(maliciousInput);
    });
  });

  describe('cuid', () => {
    it('should generate a non-empty string', () => {
      const result = cuid();
      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    });

    it('should generate unique ids', () => {
      const id1 = cuid();
      const id2 = cuid();
      expect(id1).not.toBe(id2);
    });

    it('should contain alphanumeric characters only', () => {
      const result = cuid();
      expect(result).toMatch(/^[a-z0-9]+$/);
    });

    // Weakness: CUID is not cryptographically secure
    // This is acceptable for internal IDs but should not be used for security-critical operations
    it('should not be used for security-critical purposes (documented weakness)', () => {
      const id = cuid();
      // CUID uses Math.random() which is not cryptographically secure
      // This is a known limitation
      expect(id).toBeDefined();
    });
  });
});
