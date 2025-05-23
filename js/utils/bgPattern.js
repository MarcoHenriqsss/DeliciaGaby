export function createBgPattern() {
  // Create a background pattern SVG and add it to assets
  const svgCode = `
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,10 Q20,5 30,10 T50,10 T70,10 T90,10" stroke="#f8b7cd" fill="none" stroke-width="1" opacity="0.3" />
      <path d="M10,30 Q20,25 30,30 T50,30 T70,30 T90,30" stroke="#f8b7cd" fill="none" stroke-width="1" opacity="0.3" />
      <path d="M10,50 Q20,45 30,50 T50,50 T70,50 T90,50" stroke="#f8b7cd" fill="none" stroke-width="1" opacity="0.3" />
      <path d="M10,70 Q20,65 30,70 T50,70 T70,70 T90,70" stroke="#f8b7cd" fill="none" stroke-width="1" opacity="0.3" />
      <path d="M10,90 Q20,85 30,90 T50,90 T70,90 T90,90" stroke="#f8b7cd" fill="none" stroke-width="1" opacity="0.3" />
    </svg>
  `;
  
  // Create assets directory if it doesn't exist
  const assetsDir = document.createElement('div');
  assetsDir.id = 'assets-dir';
  assetsDir.style.display = 'none';
  document.body.appendChild(assetsDir);
  
  // Add SVG as a blob URL
  const blob = new Blob([svgCode], {type: 'image/svg+xml'});
  const url = URL.createObjectURL(blob);
  
  // Store the URL in a data attribute for later use
  assetsDir.dataset.bgPattern = url;
  
  // Create a style element to use the pattern
  const style = document.createElement('style');
  style.innerHTML = `
    [data-bg-pattern] {
      background-image: url(${url});
      background-repeat: repeat;
    }
  `;
  document.head.appendChild(style);
}