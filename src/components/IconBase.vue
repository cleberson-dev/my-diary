<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="iconName"
    role="presentation"
    :class="[direction]"
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
  
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    }, 
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    direction: {
      type: String,
      default: "right"
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}

svg.right {
  transform: rotate(0deg);
}
svg.down {
  transform: rotate(90deg);
}
svg.up {
  transform: rotate(270deg);
}
svg.left {
  transform: rotate(180deg);
}
</style>