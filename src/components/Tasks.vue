<template>
    <h2 class="header">Tasks</h2>

    <div class="tasks" v-for="task in tasks">
        <Task :task="task" />
    </div>
</template>

<script>
import Task from './Task.vue'
import TaskModel from '../Models/Task'


export default {
    name: 'Tasks',
    components: {
        Task
    },
    data() {
        return {
            tasks: [new TaskModel("Task 1", "1", true), new TaskModel("Task 2", "2", false)]
        }
    }
}
</script>

<style scoped>
.header {
    font-family: 'Poppins';
    font-size: 30px;
    margin-top: 30px;

}
</style>