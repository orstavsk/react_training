import LinearProgress from '@mui/material/LinearProgress';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface ProgressBarOrderProps {
    progress: number;
    isOpen: boolean;
}

// snackbar with alert is used multiple times so it should be a component
const ProgressBarOrder = (props: ProgressBarOrderProps) => {
    return (
        <Snackbar
            open={props.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <MuiAlert
                severity="info"
                icon={false}
                variant="filled"
                slotProps={{ closeButton: { sx: { display: 'none' } } }}
            >
                <LinearProgress
                    variant="determinate"
                    value={props.progress}
                    sx={{
                        width: '200px'
                    }}
                />
            </MuiAlert>
        </Snackbar>
    );
};

export default ProgressBarOrder;
