import React, { useEffect, useState } from 'react';
import * as LucideIcons from 'lucide-react';

const sanitizeSvg = (source) => String(source || '')
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, '')
  .replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*')/gi, '')
  .replace(/\s(?:href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*')/gi, '');

const unwrapIcon = (icon) => {
  let value = icon;
  while (value && typeof value === 'object' && 'type' in value && 'value' in value) {
    value = value.value;
  }
  return value;
};

export function UniversalIcon({ icon, size, color, strokeWidth, className = '', style, ...props }) {
  const safeIcon = unwrapIcon(icon);
  const [fetchedSvg, setFetchedSvg] = useState(null);
  const iconKey = safeIcon && typeof safeIcon === 'object' ? JSON.stringify(safeIcon) : String(safeIcon || '');

  useEffect(() => {
    const controller = new AbortController();
    let targetUrl = '';
    let targetSvg = '';
    setFetchedSvg(null);

    if (typeof safeIcon === 'string') {
      const value = safeIcon.trim();
      if (LucideIcons[value]) return () => controller.abort();
      if (value.startsWith('<svg')) targetSvg = value;
      else if (/^https?:\/\//.test(value) || value.startsWith('/') || value.startsWith('data:image/svg')) targetUrl = value;
    } else if (safeIcon && typeof safeIcon === 'object') {
      if (safeIcon.iconType === 'svg' && safeIcon.svgContent) targetSvg = safeIcon.svgContent;
      else if (safeIcon.iconType === 'url' && safeIcon.url) targetUrl = safeIcon.url;
    }

    if (targetSvg) {
      setFetchedSvg(sanitizeSvg(targetSvg));
    } else if (targetUrl) {
      fetch(targetUrl, { signal: controller.signal })
        .then((response) => {
          if (!response.ok) throw new Error('Icon request failed (' + response.status + ')');
          return response.text();
        })
        .then((source) => {
          if (source.trim().startsWith('<svg')) setFetchedSvg(sanitizeSvg(source));
        })
        .catch((error) => {
          if (error.name !== 'AbortError') console.warn('Failed to load custom SVG icon:', error);
        });
    }
    return () => controller.abort();
  }, [iconKey]);

  const payloadProps = safeIcon && typeof safeIcon === 'object' ? safeIcon.props || {} : {};
  const payloadElementProps = { ...payloadProps };
  delete payloadElementProps.size;
  delete payloadElementProps.color;
  delete payloadElementProps.strokeWidth;
  const mergedSize = size ?? payloadProps.size ?? 24;
  const mergedColor = color ?? payloadProps.color ?? 'currentColor';
  const mergedStrokeWidth = strokeWidth ?? payloadProps.strokeWidth ?? 1.5;

  let lucideName = '';
  if (typeof safeIcon === 'string' && LucideIcons[safeIcon]) {
    lucideName = safeIcon;
  } else if (safeIcon && typeof safeIcon === 'object' && safeIcon.name && (!safeIcon.iconType || safeIcon.iconType === 'lucide')) {
    lucideName = safeIcon.name;
  }

  if (lucideName) {
    const IconComponent = LucideIcons[lucideName];
    if (IconComponent) {
      return React.createElement(IconComponent, {
        size: mergedSize,
        color: mergedColor,
        strokeWidth: mergedStrokeWidth,
        className,
        style,
        ...payloadElementProps,
        ...props,
      });
    }
  }

  if (fetchedSvg) {
    return React.createElement('span', {
      ...payloadElementProps,
      ...props,
      className: ('rudra-universal-icon ' + className).trim(),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: mergedSize,
        height: mergedSize,
        color: mergedColor,
        ...style,
      },
      dangerouslySetInnerHTML: {
        __html: fetchedSvg.replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:100%;" stroke-width="' + mergedStrokeWidth + '">'),
      },
    });
  }

  const FallbackIcon = LucideIcons.LayoutGrid;
  return React.createElement(FallbackIcon, {
    size: mergedSize,
    color: mergedColor,
    strokeWidth: mergedStrokeWidth,
    className,
    style,
    ...payloadElementProps,
    ...props,
  });
}
