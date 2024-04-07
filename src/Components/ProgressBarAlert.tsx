import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

interface ProgressBarAlertProps {
    progress: number;
    isOpen: boolean;
}

const ProgressBarAlert: React.FC<ProgressBarAlertProps> = ({ progress, isOpen }) => {
    return (
        <Snackbar
            open={isOpen}
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
                    value={progress}
                    sx={{
                        width: '200px'
                    }}
                />
            </MuiAlert>
        </Snackbar>
    );
};

export default ProgressBarAlert;
