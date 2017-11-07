const handleInputs = (input) => {
  if (!input) return;

  const name = input.target.name;
  const value = input.target.value;
  const suffix = input.target.dataset.sizing || "";


  const styledProp = `${value}${suffix}`;
  console.log(name);
  document.documentElement.style.setProperty(`--${name}`, styledProp);
  console.log("STYLED PROP", styledProp);
};

(() => {
  const inputs = document.querySelectorAll('.controls input');
  inputs.forEach(input => input.addEventListener('change', handleInputs, false));
})();