import { Dialog, DialogActions, Button, DialogTitle } from '@mui/material';

interface OrderCompleteDialogProps {
  open: boolean;
  onClose: () => void;
}

const OrderCompleteDialog = (props: OrderCompleteDialogProps) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} >
        < DialogTitle>תתחדש/י!</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>סגור</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderCompleteDialog;
