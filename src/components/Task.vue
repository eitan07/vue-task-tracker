<template>
    <div class="taskFrame">
        <h3 class="property">Name: {{ task.Name }}</h3>
        <h3 class="property">Description: {{ task.Description }}</h3>
        <h3 class="property">Completed: <input type="checkbox" :checked="task.Completed" /></h3>
        <button class="actionButton">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    methods: {
        startAnimation: (() => {

        })
    }
}

</script>

<style scoped>
.taskFrame {
    border: 2px solid black;
    border-radius: 3px;
    margin-bottom: 30px;
    padding: 10px;
}

.property {
    margin-left: 5px;
    margin-bottom: 5px;
}

input[type="checkbox"] {
    height: 17px;
    width: 17px;
    margin-left: 5px;
    position: relative;
    vertical-align: middle;
}

@keyframes idk {
    from {
        transform: scaleY(1);
    }

    to {
        transform: scaleY(3)
    }
}

.actionButton {
    margin-left: 4px;
    margin-top: 10px;
    height: 50px;
    width: 100px;
    background-color: red;
    border: 0;
    font: 17px Poppins;
    color: white;
    border-radius: 5px;
}
</style>