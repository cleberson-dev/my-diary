<template>
  <g>
    <path
      d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
	s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"
    />
    <path
      style="fill: #FFF;"
      d="M165.483,108.181c-5.053-3.028-11.604-1.386-14.632,3.667c-0.993,1.657-1.517,3.553-1.517,5.485v256
	c0,5.891,4.776,10.667,10.667,10.667c1.931,0.001,3.826-0.523,5.483-1.515l213.333-128c5.049-3.036,6.68-9.589,3.645-14.638
	c-0.899-1.495-2.15-2.746-3.645-3.645L165.483,108.181z"
    />
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </g>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "right"
    }
  }
};
</script>

<style scoped>
g.right {
  transform: rotate(0deg);
}
g.down {
  transform: rotate(90deg);
}
g.up {
  transform: rotate(270deg);
}
g.left {
  transform: rotate(180deg);
}
</style>