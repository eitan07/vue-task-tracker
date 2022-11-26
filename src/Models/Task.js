import { v4 as uuidv4 } from 'uuid'

export default class TaskModel {
        Name
        Description
        Completed
        Time
        UUID

        constructor(Name, Description) {
                this.Name = Name
                this.Description = Description
                this.Completed = false
                this.Time = null
                this.UUID = uuidv4()
        }
}