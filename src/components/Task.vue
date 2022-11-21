<template>
    <div class="taskFrame">
        <h3>
            {{ task?.Name }}
        </h3>
    </div>
</template>

<script >
import TaskModel from '../Models/Task'

export default {
    name: 'Task',
    props: {
        task: TaskModel
    }
}

</script>