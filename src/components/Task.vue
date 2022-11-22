<template>
    <div class="taskFrame">
        <h3>
            {{ }}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    }
}

</script>