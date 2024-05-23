import { Dialog, DialogActions, Button, DialogTitle } from '@mui/material';

interface OrderCompleteDialogProps {
  open: boolean;
  onClose: () => void;
}

const OrderCompleteDialog = (props: OrderCompleteDialogProps) => {

  return (
    <Dialog open={props.open} onClose={props.onClose} >
      <DialogTitle>תתחדש/י!</DialogTitle>
      <DialogActions>
        <Button onClick={props.onClose}>סגור</Button>
      </DialogActions>
    </Dialog>
  );
  
};

export default OrderCompleteDialog;
