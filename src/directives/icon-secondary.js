export default {
  beforeMount(el, binding) {
    // eslint-disable-next-line no-param-reassign
    let iconClass = `fa fa-${binding.value.icon} text-2xl`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }
    if (binding.value.green) {
      iconClass += ' text-green-400';
    } else {
      iconClass += ' text-red-400';
    }

    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
