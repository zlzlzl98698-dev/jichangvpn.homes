import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('docs/public');
const logosDir = path.join(publicDir, 'logos');
const speedtestsDir = path.join(publicDir, 'speedtests');
const unlockDir = path.join(publicDir, 'unlock');

[publicDir, logosDir, speedtestsDir, unlockDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Copy logos
const srcLogos = 'C:/Users/Pro User/Desktop/logos';
if (fs.existsSync(srcLogos)) {
  fs.readdirSync(srcLogos).forEach(file => {
    fs.copyFileSync(path.join(srcLogos, file), path.join(logosDir, file));
  });
  console.log('Copied logos:', fs.readdirSync(logosDir).length);
}

// Copy speedtests from extracted
const srcSpeed = 'C:/Users/Pro User/Desktop/机场品牌信息/extracted';
if (fs.existsSync(srcSpeed)) {
  fs.readdirSync(srcSpeed).forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      fs.copyFileSync(path.join(srcSpeed, file), path.join(speedtestsDir, file));
    }
  });
  console.log('Copied speedtests:', fs.readdirSync(speedtestsDir).length);
}

// Copy unlock images
const srcUnlock = 'C:/Users/Pro User/Desktop/机场品牌信息/光速云测试图解锁图';
if (fs.existsSync(srcUnlock)) {
  fs.readdirSync(srcUnlock).forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      fs.copyFileSync(path.join(srcUnlock, file), path.join(unlockDir, file));
    }
  });
  console.log('Copied unlock images:', fs.readdirSync(unlockDir).length);
}
