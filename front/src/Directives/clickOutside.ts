const vClickOutside = {
    mounted: (el:any, binding:any) => {
      const onClickOutside = (event:Event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value();
        }
      };
  
        document.addEventListener('click', onClickOutside);
      
        el._clickOutside = onClickOutside;
      },
      unmounted: (el:any) => {
        document.removeEventListener('click', el._clickOutside);
        delete el._clickOutside;
      },
};
export default vClickOutside