export const sendEmailConfirmation = (user) => {
    // Sends an email confirmation
    if (sails.config.enyo.user.emailConfirmationRequired) {
        sendEmailConfirmation(user);
    }
}

export const sendEmailForUserCreated = (user) => {
    // Send an email to user to specifie that user is created
}