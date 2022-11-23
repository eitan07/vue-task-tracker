<template>
    <button class="btn" :style="{
        background: BackColor, height: Height, width: Width, fontSize: FontSize
    }">{{ text
}}</button>
</template>
 
<script>
export default {
    name: 'Button',
    props: {
        text: String,
        BackColor: String,
        Height: String,
        Width: String,
        FontSize: String,
    }
}
</script>

<style>
.btn {
    font-size: 15px;
}
</style>