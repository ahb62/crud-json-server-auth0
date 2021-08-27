
import { DeleteDialog } from '../../shared/components/DeleteDialog';
import  EditDialog  from '../../shared/components/EditDialog';
const TableButtons = ({tasks, idTask, task, setTriggering}) =>
{
    return(
        <>
        <DeleteDialog tasks={tasks} task={task} idTask={idTask} setTriggering={setTriggering} />
        <EditDialog tasks={tasks} task={task} idTask={idTask} setTriggering={setTriggering}/>
            </>
    )
}
export default TableButtons;