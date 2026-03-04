import { NAV_ITEMS, type NavItem } from './nav';

describe('nav', () => {
  describe('NAV_ITEMS', () => {
    it('should have all required navigation items', () => {
      expect(NAV_ITEMS.length).toBe(7);
    });

    it('should have valid hrefs', () => {
      NAV_ITEMS.forEach(item => {
        expect(item.href).toBeDefined();
        expect(item.href).toMatch(/^\/[a-z/]+$/);
        expect(item.href.length).toBeGreaterThan(1);
      });
    });

    it('should have valid labels', () => {
      NAV_ITEMS.forEach(item => {
        expect(item.label).toBeDefined();
        expect(item.label.length).toBeGreaterThan(0);
      });
    });

    it('should have valid icons', () => {
      NAV_ITEMS.forEach(item => {
        expect(item.icon).toBeDefined();
        // Icons in lucide-react can be objects or functions
        expect(typeof item.icon === 'function' || typeof item.icon === 'object').toBe(true);
      });
    });

    it('should have unique hrefs', () => {
      const hrefs = NAV_ITEMS.map(item => item.href);
      const uniqueHrefs = new Set(hrefs);
      expect(uniqueHrefs.size).toBe(hrefs.length);
    });

    it('should have unique labels', () => {
      const labels = NAV_ITEMS.map(item => item.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(labels.length);
    });

    // Security: ensure no malicious paths
    it('should not contain malicious hrefs', () => {
      NAV_ITEMS.forEach(item => {
        expect(item.href).not.toContain('javascript:');
        expect(item.href).not.toContain('data:');
        expect(item.href).not.toContain('<script>');
      });
    });

    // Vulnerability: check for path traversal
    it('should not allow path traversal', () => {
      NAV_ITEMS.forEach(item => {
        expect(item.href).not.toContain('../');
        expect(item.href).not.toContain('..\\');
      });
    });
  });

  describe('NavItem type', () => {
    it('should allow valid nav items', () => {
      // Note: Full LucideIcon type validation requires actual icon components
      // This is a basic type check
      const validItem: NavItem = {
        label: 'Test',
        href: '/test',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        icon: (() => null) as any,
      };
      expect(validItem).toBeDefined();
    });
  });
});
