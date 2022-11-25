import { v4 as uuidv4 } from 'uuid'

export default class TaskModel {
        Name
        Description
        Completed
        UUID

        constructor(Name, Description) {
                this.Name = Name
                this.Description = Description
                this.Completed = Completed
                this.UUID = uuidv4()
        }
}