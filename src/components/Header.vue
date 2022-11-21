<template>
    <header>
        <h1>{{ title }}</h1>
        <div class="buttons">
            <div style="margin-top: 8px">
                <Button class="newTask" text="Add New Task" BackColor="green" />
                <Button class="deleteTask" text="Delete Task" BackColor="red" />
            </div>
        </div>
        <Tasks />
    </header>
</template>

<script>
import Button from './Button.vue'
import Tasks from './Tasks.vue'

export default {
    name: "Header",
    components: {
        Button,
        Tasks
    },
    props: {
        title: String
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
    display: flexbox;
    border: 3px solid rgb(149, 207, 249);
    border-radius: 10px;
    height: 60px;
    padding: 15px;
    align-content: center;
    justify-content: center;
}

.newTask {
    margin-right: 40px;
    margin-bottom: 10px;
}
</style>