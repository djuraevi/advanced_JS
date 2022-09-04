export  const CustomButton = Vue.component('custom-button', {
    template: `
      <button class="button" type="button" v-on:click="$emit('click')">
         <slot></slot>
      </button>
    `
  })