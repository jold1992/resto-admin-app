import { UNIDAD_OPTIONS, getUnidadAbrev, type UnidadMedida } from '@/lib/unidades';

describe('unidades', () => {
  describe('UNIDAD_OPTIONS', () => {
    it('should have all required units', () => {
      expect(UNIDAD_OPTIONS).toHaveLength(6);
      
      const values = UNIDAD_OPTIONS.map(u => u.value);
      expect(values).toContain('GRAMO');
      expect(values).toContain('KILOGRAMO');
      expect(values).toContain('MILILITRO');
      expect(values).toContain('LITRO');
      expect(values).toContain('UNIDAD');
      expect(values).toContain('PORCION');
    });

    it('should have labels for all units', () => {
      UNIDAD_OPTIONS.forEach(u => {
        expect(u.label).toBeDefined();
        expect(u.label.length).toBeGreaterThan(0);
      });
    });

    it('should have abbreviations for all units', () => {
      UNIDAD_OPTIONS.forEach(u => {
        expect(u.abrev).toBeDefined();
        expect(u.abrev.length).toBeGreaterThan(0);
      });
    });

    // Security: ensure no malicious values
    it('should not contain malicious values', () => {
      UNIDAD_OPTIONS.forEach(u => {
        expect(u.value).not.toContain('<script>');
        expect(u.label).not.toContain('<script>');
      });
    });
  });

  describe('getUnidadAbrev', () => {
    it('should return correct abbreviation for GRAMO', () => {
      expect(getUnidadAbrev('GRAMO')).toBe('g');
    });

    it('should return correct abbreviation for KILOGRAMO', () => {
      expect(getUnidadAbrev('KILOGRAMO')).toBe('kg');
    });

    it('should return correct abbreviation for MILILITRO', () => {
      expect(getUnidadAbrev('MILILITRO')).toBe('ml');
    });

    it('should return correct abbreviation for LITRO', () => {
      expect(getUnidadAbrev('LITRO')).toBe('L');
    });

    it('should return correct abbreviation for UNIDAD', () => {
      expect(getUnidadAbrev('UNIDAD')).toBe('und');
    });

    it('should return correct abbreviation for PORCION', () => {
      expect(getUnidadAbrev('PORCION')).toBe('por');
    });

    // Vulnerability: should handle invalid input gracefully
    it('should handle invalid input gracefully', () => {
      // Passing an invalid value could cause issues
      // This is a potential vulnerability if not handled
      expect(getUnidadAbrev('INVALID' as UnidadMedida)).toBe('INVALID');
    });
  });
});
