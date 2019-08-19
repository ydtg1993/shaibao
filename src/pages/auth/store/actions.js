export const USER_LOGIN = 'user_login';
export const USER_REGISTER = 'user_register';
export const CLOSE_LOGIN_DIALOG = 'close_login_dialog';
export const CLOSE_REGISTER_DIALOG = 'close_register_dialog';
export const OPEN_RESET_DIALOG = 'open_reset_dialog';
export const CLOSE_RESET_DIALOG = 'close_reset_dialog';

export const UserLogin = () => ({
    type: USER_LOGIN
});

export const UserRegister = () => ({
   type:USER_REGISTER
});

export const CloseLoginDialog = () => ({
    type:CLOSE_LOGIN_DIALOG
});

export const CloseRegisterDialog = () => ({
    type:CLOSE_REGISTER_DIALOG
});

export const OpenResetDialog = () => ({
    type:OPEN_RESET_DIALOG
});

export const CloseResetDialog = () => ({
    type:CLOSE_RESET_DIALOG
});

