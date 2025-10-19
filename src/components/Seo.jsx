import { useEffect } from 'react';

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const Seo = ({ title, description, url, image, jsonLd }) => {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    setMeta('description', description);
    setMeta('keywords', 'Skurup, kultur, idrott, förening, aktiviteter, evenemang');
    const canonical = document.querySelector("link[rel='canonical']") || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    if (url) canonical.setAttribute('href', url);
    if (!document.querySelector("link[rel='canonical']")) document.head.appendChild(canonical);

  setProperty('og:title', title);
  setProperty('og:description', description);
  if (url) setProperty('og:url', url);

  // No og:image/twitter:image set for now
  setMeta('twitter:card', 'summary');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);

    // JSON-LD
    let ld = null;
    if (jsonLd) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.text = JSON.stringify(jsonLd);
      document.head.appendChild(ld);
    }

    return () => {
      document.title = prevTitle;
      // Note: we intentionally don't remove the meta tags to avoid flicker
      if (ld) document.head.removeChild(ld);
    };
  }, [title, description, url, image, jsonLd]);

  return null;
};

export default Seo;
