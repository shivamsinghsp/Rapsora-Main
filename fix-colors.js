const fs = require('fs');
const files = [
  'src/components/sections/team-section.tsx',
  'src/components/sections/testimonials-section.tsx',
  'src/components/sections/expertise-section.tsx',
  'src/components/sections/cta-section.tsx',
  'src/components/sections/team/team-page-content.tsx',
  'src/components/layout/footer.tsx'
];

files.forEach(f => {
  if (!fs.existsSync(f)) {
      console.log('Skipping ' + f);
      return;
  }
  let content = fs.readFileSync(f, 'utf8');

  // Replace bg-black
  content = content.replace(/bg-black(?![/a-zA-Z0-9-])/g, 'bg-background dark:bg-black');

  // Replace text-white
  content = content.replace(/text-white(?![/a-zA-Z0-9-])/g, 'text-foreground dark:text-white');

  // Replace text-white/XX
  content = content.replace(/text-white\/([0-9]+|\[[0-9.]+\])/g, 'text-foreground/$1 dark:text-white/$1');

  // Replace border-white/XX
  content = content.replace(/border-white\/([0-9]+|\[[0-9.]+\])/g, 'border-foreground/10 dark:border-white/$1');

  // Replace bg-white/XX
  content = content.replace(/bg-white\/([0-9]+|\[[0-9.]+\])/g, 'bg-foreground/5 dark:bg-white/$1');

  fs.writeFileSync(f, content);
  console.log('Updated ' + f);
});
