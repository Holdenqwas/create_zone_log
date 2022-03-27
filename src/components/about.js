import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';


export const About = ({ open, handleClose }) => {

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"О плагине"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>
              Инструмент для создания ZONE_LOG.
            </Typography>
            <Typography mt={2} sx={{ textAlign: 'right' }}>
              Хорн Антон Викторович
            </Typography>
            <Typography sx={{ textAlign: 'right' }}>
              HornAV@tatneft.ru
            </Typography>
            <Typography sx={{ textAlign: 'right' }}>
              create_zone_log
            </Typography>
            <Typography sx={{ textAlign: 'right' }}>
              1.0.0
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog >
    </div >
  );
}
