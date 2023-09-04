import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { timeConvert } from './utils';

export default function CookItem({item, remove}) {
    return (
        <ListItem secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={remove}>
                <DeleteIcon />
            </IconButton>
        }>
            <ListItemText id={item.id} primary={item.name} secondary={timeConvert(item.time) + " - " + item.temperature +"° F"}/>
        </ListItem>
      );
