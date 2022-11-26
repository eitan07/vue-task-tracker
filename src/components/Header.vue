<template>
    <header>
        <div class="buttons">
            <Button class="newTask" @click="createNewTask" text="Add New Task" BackColor="green" />
        </div>
        <Tasks />
    </header>
</template>

<script>
import TaskModel from '@/Models/Task'
import Button from './Button.vue'
import Tasks from './Tasks.vue'

export default {
    name: "Header",
    components: {
        Button,
        Tasks
    },
    methods: {
        createNewTask: (() => {
            const name = prompt('Enter task name:')
            const description = prompt('Enter task description:')

            if (name != null && description != null) {
                if (name != "" && description != "") {
                    const newTask = new TaskModel(name, description)

                    const rawArr = localStorage.getItem('_tasks')
                    const tasks = JSON.parse(rawArr)
                    tasks.push(newTask)

                    localStorage.setItem('_tasks', JSON.stringify(tasks))
                    location.reload()
                }
            }

        })
    }
}
</script>

<style scoped>
header {
    display: flexbox;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    padding: 10px;
    align-content: center;
    justify-content: space-around;
}

.newTask {
    font: 17px Poppins;
}
</style>