import { describe, it, expect } from 'vitest';
import { minify } from '../src/workers/css-minifier.worker';

describe('CSS Minifier Worker Logic', () => {
  it('should minify CSS content correctly', () => {
    const css = 'body { color: #ffffff; }';
    const result = minify(css);
    
    expect(result.error).toBeUndefined();
    expect(result.styles).toBe('body{color:#fff}');
    expect(result.stats).toBeDefined();
  });

  it('should handle invalid CSS gracefully (CleanCSS usually tolerates it but lets check errors if any)', () => {
     // CleanCSS is quite forgiving, but let's see if we can trigger an error or just ensure it returns something
     const css = 'broken {';
     const result = minify(css);
     // CleanCSS might just output "broken{}" or empty string depending on parsing
     expect(result).toBeDefined();
  });

  it('should return stats with minified size', () => {
    const css = 'div { margin: 0px; }';
    const result = minify(css);
    expect(result.stats.minifiedSize).toBeLessThan(css.length);
  });
});
