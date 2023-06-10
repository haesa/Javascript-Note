// Bubbling up, Propagating
function a() {
  throw new Error('Error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니 여기서 에러를 핸들링 할 수 없을 것 같아.');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Cathed!');
}
console.log('Done!');
