import React from 'react';
import TableButtons from './TableButtons';
import useStyles from "../../../styles/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,} from "@material-ui/core/";
import {withStyles} from '@material-ui/core/styles';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
 
export const TableTasks = ({tasks, task, setTriggering}) =>
{
  const styles = useStyles();
  return (
      <>  
    <TableContainer component={Paper}>
      <Table size="small" margin="none" className={styles.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {tasks.map((row) => (
              <StyledTableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.taskName}
              </TableCell>
              <TableCell>{row.priorityLevel}</TableCell>
              <TableCell>{row.completed}</TableCell>
              <TableCell>
                <TableButtons tasks={tasks} idTask={row.id} task={task} setTriggering={setTriggering} />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
