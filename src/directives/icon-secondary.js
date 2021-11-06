export default {
  beforeMount(el, binding) {
    // eslint-disable-next-line no-param-reassign
    let iconClass = `fa fa-${binding.value.icon} text-green-40 text-2xl`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }

    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
