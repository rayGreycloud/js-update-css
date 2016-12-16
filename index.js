// Grab input elements
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // Get data-sizing property value if exists
  const suffix = this.dataset.sizing || '';
  // Change CSS variable
  // Set property by accessing input name and current value
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Add eventlisteners for value change AND mousemove
inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
});
