export const validateEmail = (email: String): Boolean => {

    const emailFormat = String(email)

    const emailRegex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$');

    return emailRegex.test(emailFormat);

}