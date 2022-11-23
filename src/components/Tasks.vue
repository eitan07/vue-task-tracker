<template>
    <h2 class="header">Tasks</h2>

    <div @load="loadTasks()" class="tasks" v-for="task in tasks">
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
            tasks: [new TaskModel("cum", 'a', false)]
        }
    },
    methods: {
        loadTasks: (() => {
            const rawArr = localStorage.get('_tasks')
            if (rawArr) {
                this.tasks = JSON.parse(rawArr)
            }
        })
    },
    mounted: (() => {
        this.loadTasks()
    })
}
</script>

<style scoped>
.header {
    font-family: Poppins;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>