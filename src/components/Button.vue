<template>
    <button class="btn" :style="{ background: BackColor }">{{ text }}</button>
</template>
 
<script>
export default {
    name: 'Button',
    props: {
        text: String,
        BackColor: String
    }
}
</script>