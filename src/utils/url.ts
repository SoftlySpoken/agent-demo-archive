/**
 * Checks if a URL is a private/local URL
 * Private URLs include: localhost, 127.0.0.1, 192.168.x.x, 10.x.x.x, 172.16.x.x
 */
export function isPrivateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);

    // Check for localhost variants
    const hostname = urlObj.hostname.toLowerCase();
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1') {
      return true;
    }

    // Check for private IP ranges
    // 10.0.0.0 - 10.255.255.255
    if (hostname.startsWith('10.')) {
      return true;
    }

    // 172.16.0.0 - 172.31.255.255
    if (hostname.startsWith('172.')) {
      const parts = hostname.split('.');
      if (parts.length >= 2) {
        const secondOctet = parseInt(parts[1], 10);
        if (secondOctet >= 16 && secondOctet <= 31) {
          return true;
        }
      }
    }

    // 192.168.0.0 - 192.168.255.255
    if (hostname.startsWith('192.168.')) {
      return true;
    }

    return false;
  } catch {
    // If URL parsing fails, treat as private for safety
    return true;
  }
}

/**
 * Determines whether to show the live demo button based on:
 * 1. PUBLIC_SHOW_LIVE_DEMOS env var (if explicitly "false", show all)
 * 2. URL type (public vs private)
 */
export function shouldShowLiveDemo(liveDemoUrl: string | undefined): boolean {
  if (!liveDemoUrl) {
    return false;
  }

  const showAll = import.meta.env.PUBLIC_SHOW_LIVE_DEMOS === 'false';

  if (showAll) {
    return true;
  }

  // Default behavior: only show for public URLs
  return !isPrivateUrl(liveDemoUrl);
}
