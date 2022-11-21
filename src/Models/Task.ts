class Task {
    Name: string
    Description: string
    TaskDone: boolean

    constructor(Name: string, Description: string, TaskDone: boolean) {
        this.Name = Name
        this.Description = Description
        this.TaskDone = TaskDone
    }
}

export default Task