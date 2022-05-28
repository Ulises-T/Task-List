export interface Task {
    id?: number; //De esta manera cuando se crea una tarea y se guarda se genera automaticamente el id.
    text:string;
    day:string;
    reminder:boolean;
}