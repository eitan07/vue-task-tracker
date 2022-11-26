<template>
    <h2 class="header">Tasks</h2>

    <div class="tasks" v-if="tasks.length > 0" v-for="task in tasks">
        <Task :task="task" :UUID="task.UUID" />
    </div>
    <div v-else style="text-align: center; margin-top: 30px;">
        <h1>No tasks yet :(</h1>
        <br />
        <h1>You can always create new one using the "Add New Task" button</h1>
    </div>

</template>

<script>
import Task from './Task.vue'


export default {
    name: 'Tasks',
    components: {
        Task
    },
    data() {
        return {
            tasks: []
        }
    },
    created() {
        const rawArr = localStorage.getItem('_tasks')
        const tasks = JSON.parse(rawArr)
        this.tasks = tasks
    }
}
</script>

<style scoped>
.header {
    font-family: Poppins;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
}

div>h1 {
    font: 25px Poppins;
    font-weight: bold;
    color: rgb(75, 75, 75);
}
</style>