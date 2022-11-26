<template>
    <div class="taskFrame">
        <h3 class="property">Name: {{ task.Name }}</h3>
        <h3 class="property">Description: {{ task.Description }}</h3>
        <h3 class="property">Completed: <input type="checkbox" @change="checkedChanged" :checked="task.Completed" />
        </h3>
        <button class="actionButton btn" @click="taskDeleted">Delete</button>
    </div>
</template>

<script>

export default {
    name: 'Task',
    props: {
        task: Object
    },
    methods: {
        taskDeleted: ((event) => {
            const { target } = event
            const rawArr = localStorage.getItem('_tasks')
            const tasks = JSON.parse(rawArr)
            // const tasks = []

            const UUID = target.parentElement.getAttribute('uuid')

            const taskIndex = tasks.findIndex(x => x.UUID === UUID)

            if (taskIndex == 0) {
                tasks.shift()
            } else {
                tasks.splice(taskIndex, 1)
            }
            localStorage.setItem('_tasks', JSON.stringify(tasks))
            location.reload()
        }),

        checkedChanged: ((event) => {
            const { target } = event
            const rawArr = localStorage.getItem('_tasks')
            const tasks = JSON.parse(rawArr)
            // const tasks = []

            const UUID = target.parentElement.parentElement.getAttribute('uuid')

            const taskIndex = tasks.findIndex(x => x.UUID === UUID)

            tasks[taskIndex].Completed = target.checked
            localStorage.setItem('_tasks', JSON.stringify(tasks))
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